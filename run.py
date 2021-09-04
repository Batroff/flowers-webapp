from flaskr import create_app
from config import config_dict
from decouple import config
from waitress import serve


DEBUG = config('DEBUG', default=False, cast=bool)
app_config = config_dict['debug'] if DEBUG else config_dict['production']

app = create_app(app_config)

if __name__ == '__main__':
    if DEBUG:
        app.run(host='0.0.0.0', port=5000, debug=True)
    else:
        serve(app, host='0.0.0.0', port=5000)
