import os
import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)

# openai.api_key = os.getenv("OPENAI_API_KEY")

# @app.route("/", methods=("GET", "POST"))
# def index():
#     if request.method == "POST":
#         response = create_chat_completion()
#         return redirect(url_for("index", response))

#     result = request.args.get("result")
#     return render_template("index.html", result=result)

# def create_chat_completion():
#     response = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",
#         messages=
#             [
#                 {"role": "system", "content": "You are a helpful assistant."},
#                 {"role": "user", "content": "Who won the world series in 2020?"},
#                 {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
#                 {"role": "user", "content": "Where was it played?"}
#             ]
#         )
#     result=response.choices[0].text
#     return result

@app.route('/profile')
def my_profile():
    response_body = {
        "return" :"Successfully get flask API!"
    }

    return response_body