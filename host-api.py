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
    # data = [
    #     {'course': 'PEA306', 'timing': '02-03 PM', 'platform': '34-101', 'status': ''},
    #     {'course': 'CSE322', 'timing': '09-10 AM', 'platform': '34-508', 'status': ''},
    #     {'course': 'CSE427', 'timing': '10-11 AM', 'platform': '33-306', 'status': ''},
    #     {'course': 'CSE427', 'timing': '11-12 AM', 'platform': '33-306', 'status': ''},
    #     {'course': 'INT331', 'timing': '12-01 PM', 'platform': '33-501', 'status': ''}
    # ]
    return jsonify(classData)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
