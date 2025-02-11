from flask import Flask, request, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/action_page', methods=['GET'])
def action_page():
    username = request.args.get('username')
    if username:
        command = f"python scrape.py {username}"
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        output = result.stdout.strip()
        return render_template('result.html', username=username, diffAvg=output)
    else:
        return "No username provided."

if __name__ == '__main__':
    app.run(debug=True)