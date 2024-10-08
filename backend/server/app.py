#!/usr/bin/env python3

from flask import Flask, request, make_response, session, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from sqlalchemy import desc
import os
import requests
from dotenv import load_dotenv

from models import db

# Load environment variables from .env file
load_dotenv()

# Set up base directory and database URI
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

# Initialize Flask app
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

# Enable CORS
CORS(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Initialize the database
db.init_app(app)

# Default route for the app
@app.route('/')
def index ():
    return "NextGame API"

# Proxy route for fetching games from the external API
@app.route('/api/games', methods=["GET"])
def get_games():
    external_api_url = 'https://api.rawg.io/api/games'

    # Fetch the API key from environment variables
    api_key =  os.getenv("API_KEY")
    if not api_key:
        return jsonify({"error": "api key not found"}), 500


     # Add the API key as a query parameter
    params = request.args.to_dict()
    params['key'] = api_key

    try:
        # Make the external API request
        response = requests.get(external_api_url, params=params)
        response.raise_for_status()  # Raise an error for bad HTTP responses (4xx or 5xx)
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/genres', methods=["GET"])
def get_genres():
    external_api_url = 'https://api.rawg.io/api/genres'

    api_key =  os.getenv("API_KEY")
    if not api_key:
        return jsonify({"error": "api key not found"}), 500

    params = request.args.to_dict()
    params['key'] = api_key

    try:
        response = requests.get(external_api_url, params=params)
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5555, debug=True)