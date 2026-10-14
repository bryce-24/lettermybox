from flask import Flask, request, render_template
from scrape import scrape

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results', methods=['GET'])
def results():
    username = request.args.get('username', '').strip()
    if not username:
        return "No username provided."
    diffAvg = round(scrape(username), 2)
    return render_template('result.html', username=username, diffAvg=diffAvg)

if __name__ == '__main__':
    app.run(debug=True)