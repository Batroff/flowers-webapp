from flask import Response
from werkzeug.datastructures import Headers

from flaskr import api_blueprint as blueprint
from flaskr.database_queries import select_flowers
import json


@blueprint.route('/flowers', methods=['GET'])
def get_flowers():
    flowers = [f.to_json() for f in select_flowers()]

    headers = Headers()
    headers.add('Content-Type', 'application/json')
    headers.add('Access-Control-Allow-Origin', '*')
    resp = Response(json.dumps(flowers))
    resp.headers = headers
    return resp
