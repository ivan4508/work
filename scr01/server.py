import smtplib
import json
from urllib.parse import unquote, quote
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data', methods=["POST"]) 
def send_mail():
	if request.method == 'POST':
		data = request.data
		data = unquote(data, "utf-8")
		msg = data.split('&')
		# print(msg)


		message = """



		Новый заказ: \n"""

		i=0
		while i < len(msg):
			if i==0:
				message = message + '\n Дата: ' + str(msg[i].split('=')[1])
				i = i+1
			if i==1:
				message = message + '\n Время: ' + str(msg[i].split('=')[1])
				i = i+1
			if i==2:
				message = message + '\n Количество: ' + str(msg[i].split('=')[1])
				i = i+1
			if i==3:
				message = message + '\n Имя: ' + str(msg[i].split('=')[1])
				i = i+1
			if i==4:
				message = message + '\n Номер телефона: ' + str(msg[i].split('=')[1])
				i = i+1
			if i==5:
				message = message + '\n Итоговая сумма: ' + str(msg[i].split('=')[1])
				i = i+1
			if i>5:
				message  = message + '\n' + str(msg[i].split('=')[1]) + ' - ' + str(msg[i+1].split('=')[1])
				i = i+2

		message = message.encode('utf-8')
		smtpObj = smtplib.SMTP('smtp.gmail.com', 587)
		smtpObj.starttls()
		smtpObj.login('roman.kuzmichev27@gmail.com','killers1990')
		mail_to = ['roman.kuzmichev@rambler.ru']
		smtpObj.sendmail('roman.kuzmichev27@gmail.com', mail_to, message)
		smtpObj.quit
		print ("mail delivery")
		return "ok"
app.run(debug=True)