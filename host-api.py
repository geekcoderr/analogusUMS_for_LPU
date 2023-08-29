from flask import Flask, jsonify
from flask_cors import CORS
import requests
from ums import User

regNo = input("Provide Registration-ID : ")
passwd = input("Provide UMS-Password : ")

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

def get_public_ip():
    response = requests.get("https://httpbin.org/ip")
    data = response.json()
    return data["origin"]

@app.route('/apiums', methods=['GET'])
def get_api_data():
    client_public_ip = get_public_ip()
    apiData = User(registration=regNo, password=passwd)

    classes = apiData.classes()
    classData = classes['data']
    print(f"\nGET Request made by : {client_public_ip}")
    return jsonify(classData)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
