import os
import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/", methods=(["POST"]))
def index():
    msg = request.get_json()["content"]
    print(msg)
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=
        [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": msg}
        ]
    )
    print(response)
    result=response.choices[0].message
    return result