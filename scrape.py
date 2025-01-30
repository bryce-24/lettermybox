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
        title = item.get_text()
        print(item)
        file.write(item.get_text())
        file.write("\n")