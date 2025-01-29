from bs4 import BeautifulSoup
import requests

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

url = 'https://letterboxd.com/bryce224/films/'
page = requests.get(url, headers=headers)
soup = BeautifulSoup(page.text, 'html.parser')


soup.find_all('div')
print(page.status_code)