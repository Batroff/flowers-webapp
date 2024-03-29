import logging
import os
from importlib import import_module

from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask import Blueprint

import tinify

tinify.key = 'yGgYMWp4ynhq3jn9JWcmRmHSfjWTr24y'

base_blueprint = Blueprint('base_blueprint',
                           __name__,
                           template_folder='templates',
                           static_folder='static')

api_blueprint = Blueprint('api_blueprint',
                          __name__,
                          url_prefix='/api')

db = SQLAlchemy()
login_manager = LoginManager()


def configure_database(app):
    @app.before_first_request
    def init_database():
        db.create_all()

    @app.teardown_request
    def shutdown_session(exception=None):
        db.session.remove()


def register_extensions(app):
    db.init_app(app)
    login_manager.init_app(app)


def register_blueprints(app):
    for module_name in ('routes', 'api'):
        module = import_module(f'flaskr.{module_name}')
        app.register_blueprint(module.blueprint)


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    add_logger(app)

    register_blueprints(app)
    register_extensions(app)
    configure_database(app)

    return app


def add_logger(app):
    log_level = logging.DEBUG if app.config['DEBUG'] else logging.INFO
    log_path = os.path.join(app.config['LOG_FOLDER'], 'server.log')
    log_format = '[%(asctime)s] - %(levelname)-7s - %(module)s: %(message)s'

    logging.basicConfig(filename=log_path, level=log_level, format=log_format)
