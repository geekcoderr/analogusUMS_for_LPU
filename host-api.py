from flask import Flask, jsonify
from flask_cors import CORS
from ums import User

regNo = input("Provide Registration-ID : ")
passwd = input("Provide UMS-Password : ")


app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app


@app.route('/apiums', methods=['GET'])
def get_api_data():
    # regNo = regNo
    # passwd = passwd
    apiData = User(registration=regNo, password=passwd)

    classes = apiData.classes()
    classData = classes['data']
    return jsonify(classData)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
