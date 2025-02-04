import requests
from bs4 import BeautifulSoup

url = "https://letterboxd.com/bryce224/films/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

film_data = []

def convert_rating_to_number(rating_text):
    if rating_text:
        rating_text = rating_text.replace('★', '').replace('½', '.5').strip()
        if rating_text:  # Ensure the string is not empty
            return float(rating_text)
    return None

items = soup.find_all('li', class_='poster-container')
for item in items:
    div_tag = item.find('div', class_='film-poster')
    rating_tag = item.find('span', class_='rating')
    if div_tag and 'data-film-slug' in div_tag.attrs:
        title = div_tag['data-film-slug']
        rating = convert_rating_to_number(rating_tag.text.strip()) if rating_tag else None
        film_data.append((title, rating))

for title, rating in film_data:
    print(f"{title} - {rating}")
