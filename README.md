# letter my box

This project is a web application that scrapes data from Letterboxd to provide users with insightful statistics about their movie ratings. Currently, the application calculates the average difference between a user's ratings and the average ratings of movies.

## Features

- **Average Rating Difference**: Calculate the average difference between your ratings and the average ratings of movies on Letterboxd.

## Technologies Used

- **Python**: For backend data processing and web scraping.
- **Flask**: To create a lightweight web server for the application.
- **JavaScript, HTML, CSS**: For the front-end interface, providing a user-friendly experience.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/letterboxd-stats-scraper.git
   cd letterboxd-stats-scraper
   ```

2. **Install Python dependencies**:
   Make sure you have Python 3.7 or higher installed. Then, install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   Start the Flask development server:
   ```bash
   python app.py
   ```

4. **Access the application**:
   Open your browser and navigate to `http://127.0.0.1:5000`.

## Usage

1. Enter your Letterboxd username in the input field on the homepage.
2. Click "Submit" to retrieve your statistics.

## Troubleshooting

- if you encounter issues with dependencies, ensure you are using a virtual environment and Python 3.7 or higher.
- if the application fails to scrape data, verify that the provided Letterboxd username is correct and publicly accessible.