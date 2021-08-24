from flaskr.models import User, ItemFlower
from flaskr import db


def select_user(username):
    return User.query.filter_by(username=username).first()


def select_flowers():
    return ItemFlower.query.all()


def select_flower(item_id):
    return ItemFlower.query.filter_by(id=item_id).one_or_none()


def delete_flower_by_id(item_id):
    ItemFlower.query.filter_by(id=item_id).delete()
    db.session.commit()


def add_flower(flower: ItemFlower):
    db.session.add(flower)
    db.session.commit()
