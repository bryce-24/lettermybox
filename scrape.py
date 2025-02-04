import requests
from bs4 import BeautifulSoup

url = "https://letterboxd.com/bryce224/films/"
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

for title, rating in film_data:
    print(f"{title} - {rating}")

ratingSum = 0
ratingCount = 0
ratingAverage = 0

for title, rating in film_data:
    ratingSum += rating
    ratingCount += 1

print("rating sum:", ratingSum)
print("film count:", ratingCount)
print("average rating:", ratingSum/ratingCount)