import requests
from bs4 import BeautifulSoup
import sys

def scrape(username):
    print(f"Scraping data for username: {username}")
    url = f"https://letterboxd.com/{username}/films/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    film_data = []

    def convert_rating_to_number(rating_text):
        if rating_text:
            if rating_text == '½':
                return float(0.5)
            if rating_text == '★':
                return float(1.0)
            if rating_text == '★½':
                return float(1.5)
            if rating_text == '★★':
                return float(2.0)
            if rating_text == '★★½':
                return float(2.5)
            if rating_text == '★★★':
                return float(3.0)
            if rating_text == '★★★½':
                return float(3.5)
            if rating_text == '★★★★':
                return float(4.0)
            if rating_text == '★★★★½':
                return float(4.5)
            if rating_text == '★★★★★':
                return float(5.0)
        return None

    items = soup.find_all('li', class_='poster-container')
    for item in items:
        div_tag = item.find('div', class_='film-poster')
        rating_tag = item.find('span', class_='rating')
        if div_tag and 'data-film-slug' in div_tag.attrs:
            title = div_tag['data-film-slug']
            rating = convert_rating_to_number(rating_tag.text.strip()) if rating_tag else None
            film_data.append((title, rating))

    filmLinks = [f"https://letterboxd.com/film/{title}/" for title, rating in film_data]

    ratingDiffs = []

    for link, (title, rating) in zip(filmLinks, film_data):
        response = requests.get(link)
        soup = BeautifulSoup(response.text, "html.parser")
        avg_tag = soup.find('meta', {'name': 'twitter:data2'})
        if avg_tag and 'content' in avg_tag.attrs:
            average_rating = avg_tag['content']
            try:
                average_rating = float(average_rating[:4])
                ratingDiffs.append(abs(average_rating - rating))
            except ValueError:
                print(f"Could not convert average rating for {link}: {average_rating}")

    diffAvg = sum(ratingDiffs) / len(ratingDiffs) if ratingDiffs else 0
    print(diffAvg)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        scrape(sys.argv[1])
    else:
        print("No username provided.")