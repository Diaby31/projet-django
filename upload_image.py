import requests

url = "http://127.0.0.1:8000/api/v1/produits/"
files = {"image": open(r"C:\Users\USER\OneDrive\Bureau\cours ipssi M1\10em S\cours\TP-django\OIP.jpg", "rb")}
data = {
    "nom": "Produit Test",
    "description": "Un produit avec image",
    "prix": "100.50",
    "categorie": 1
}

response = requests.post(url, data=data, files=files)

print("Status code:", response.status_code)
print("Response:", response.json())
