import os

from flask import request, render_template, redirect, url_for, flash, current_app

from flask_login import login_user, login_required, logout_user
from werkzeug.utils import secure_filename

from flaskr.database_queries import select_user, select_flowers, select_flower, add_flower, delete_flower_by_id
from flaskr.forms import LoginForm
from flaskr import base_blueprint as blueprint
from flaskr.models import ItemFlower
from flaskr.utils import optimize_image

ALLOWED_EXTENSIONS = {'jpg', 'png', 'jpeg'}


@blueprint.route('/login', methods=['GET', 'POST'])
def login():
    current_app.logger.info(f'Login request with data: {request.form}')

    login_form = LoginForm(request.form)

    if 'login' in request.form:
        username = request.form['username']
        password = request.form['password']

        user = select_user(username)

        if user and user.password == password:
            login_user(user)
            current_app.logger.info(f'Successful login {user}')
            return redirect(url_for('base_blueprint.admin'))
        else:
            return render_template('login.html', form=login_form, msg='Логин или пароль введены неверно')

    return render_template('login.html', form=login_form)


@blueprint.route('/logout')
def logout():
    logout_user()
    current_app.logger.info(f'Successful logout')
    return redirect(url_for('base_blueprint.login'))


@blueprint.route('/admin', methods=['GET', 'POST'])
@login_required
def admin():
    existing_flowers = select_flowers()

    if request.method == 'POST' and 'action' in request.form:
        action = request.form['action']

        if action == 'delete' and allowed_to_delete(item_id=request.form['id']):
            delete_flower_by_id(item_id=request.form['id'])

            filepath = get_download_path(filename=request.form['image'])
            if os.path.exists(filepath):
                os.remove(filepath)

            flash('Товар успешно удалён!')
            return redirect(url_for('base_blueprint.admin'))

        elif action == 'add':
            image_prefix = 'about_optimized-'
            file = request.files['image']
            filename = secure_filename(file.filename)

            data = {
                'title': request.form['title'],
                'description': request.form['description'],
                'image': f'{image_prefix}{filename}',
                'existing_flowers': existing_flowers
            }
            if not allowed_to_add(data=data):
                flash('Некорректный формат данных')
                return redirect(url_for('base_blueprint.admin'))

            source_filepath = get_download_path(filename=filename)
            file.save(source_filepath)
            optimized_filepath = get_download_path(filename=data['image'])
            optimize_image(src_filepath=source_filepath, res_filepath=optimized_filepath)
            if os.path.exists(source_filepath):
                os.remove(source_filepath)

            flower = ItemFlower(title=data['title'],
                                description=data['description'],
                                image=data['image'])
            add_flower(flower)

            flash('Товар успешно добавлен!')
            return redirect(url_for('base_blueprint.admin'))

    return render_template('admin.html', items=existing_flowers)


def get_download_path(filename):
    root_path = os.path.dirname(current_app.instance_path)
    upload_path = os.path.join(root_path, current_app.config['UPLOAD_FOLDER'], filename)
    return upload_path


def allowed_to_add(data):
    if len([f for f in data['existing_flowers'] if f.title == data['title']]) > 0:
        flash('Товар с таким именем уже существует. Имя должно быть уникальным!')
        return False
    elif len([f for f in data['existing_flowers'] if f.image == data['image']]) > 0:
        flash('Данное изображение уже существует')
        return False

    translated = {'title': 'Название', 'description': 'Описание', 'image': 'Изображение'}
    for key in ('title', 'description', 'image'):
        if data[key] == '':
            flash(f'{translated[key]} товара не может быть пустым!')
            return False

    if not allowed_file(filename=data['image']):
        return False

    return True


def allowed_to_delete(item_id):
    if select_flower(item_id) is None:
        flash('Данного товара не существует!')
        return False

    return True


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
