from decouple import config


class Config(object):
    SECRET_KEY = config('SECRET_KEY')

    # database
    SQLALCHEMY_DATABASE_URI = '{}://{}:{}@{}:{}/{}?charset=utf8'.format(
        config('DB_ENGINE', default='mysql+pymysql'),
        config('DB_USER'),
        config('DB_PASSWORD'),
        config('DB_HOST'),
        config('DB_PORT'),
        config('DB_NAME')
    )
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    LOG_FOLDER = 'logs/'


class ProductionConfig(Config):
    DEBUG = False

    # Security
    SESSION_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_DURATION = 3600

    UPLOAD_FOLDER = 'images/'


class DebugConfig(Config):
    DEBUG = True
    TESTING = True

    UPLOAD_FOLDER = 'public/images'


config_dict = {
    'production': ProductionConfig,
    'debug': DebugConfig
}
