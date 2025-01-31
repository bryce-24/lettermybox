import requests
from bs4 import BeautifulSoup

url = "https://letterboxd.com/bryce224/films/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

with open("page_source.html", "w", encoding="utf-8") as file:
    file.write(soup.prettify())

items = soup.find_all('li', class_='poster-container')
with open("titles.html", "w", encoding="utf-8") as file:
    for item in items:
        img_tag = item.find('img')
        rating_tag = item.find('span', class_='rating')
        if img_tag and 'alt' in img_tag.attrs:
            title = img_tag['alt']
            rating = rating_tag.text.strip() if rating_tag else "No rating"
            print(f"{title} - {rating}")
            file.write(f"{title} - {rating}\n")