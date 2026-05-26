# Panduan Pengembangan Web Apps Verde Fashion

Panduan ini membantu Anda membangun aplikasi web berbasis Node.js untuk implementasi desain Verde Fashion Website dari Figma atau Behance. Anda dapat menjalankan dan menguji aplikasi ini di komputer lokal.

## Persiapan Lingkungan Kerja

Sebelum memulai, Anda perlu menyiapkan beberapa perangkat lunak berikut.

1. Node.js versi LTS terbaru
2. Visual Studio Code sebagai editor kode
3. Peramban web seperti Google Chrome untuk pengujian

## Struktur Proyek

Buat struktur folder proyek seperti di bawah ini.

```
verde-fashion/
  ├── public/
  │   ├── css/
  │   │   └── style.css
  │   └── images/
  ├── views/
  │   └── index.html
  ├── server.js
  └── package.json
```

## Langkah Langkah Instalasi

1. Buka terminal atau command prompt Anda.
2. Buat folder baru dengan nama verde-fashion.
3. Masuk ke dalam folder tersebut.
4. Jalankan perintah npm init -y untuk membuat file package.json.
5. Jalankan perintah npm install express untuk menginstal framework server.

## Kode Sumber Aplikasi

### 1. File package.json

File ini berisi konfigurasi proyek dan dependensi yang Anda butuhkan.

```json
{
  "name": "verde-fashion",
  "version": "1.0.0",
  "description": "Web aplikasi untuk Verde Fashion Website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.19.0"
  }
}
```

### 2. File server.js

File ini berfungsi sebagai server lokal untuk menjalankan aplikasi web Anda.

```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server berjalan di http://localhost:' + PORT);
});
```

### 3. File views/index.html

File ini berisi struktur HTML dasar yang mengadopsi elemen visual dari desain Verde Fashion. Desain ini menggunakan tata letak modern, bersih, dan berfokus pada produk fesyen.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verde Fashion Website</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <header class="navbar">
        <div class="logo">VERDE</div>
        <nav class="menu">
            <a href="#">Koleksi</a>
            <a href="#">Pria</a>
            <a href="#">Wanita</a>
            <a href="#">Tentang Kami</a>
        </nav>
        <div class="cart-icon">Keranjang (0)</div>
    </header>

    <main>
        <section class="hero-section">
            <div class="hero-text">
                <h1>Koleksi Estetik Musim Gugur</h1>
                <p>Temukan pakaian modern dengan desain minimalis dan kenyamanan maksimal.</p>
                <a href="#" class="btn-primary">Jelajahi Sekarang</a>
            </div>
            <div class="hero-image">
                <div class="placeholder-image">Tempat Foto Produk Utama</div>
            </div>
        </section>

        <section class="featured-products">
            <h2>Produk Unggulan</h2>
            <div class="product-grid">
                <div class="product-card">
                    <div class="product-thumb">Foto Produk 1</div>
                    <h3>Kemeja Verde Minimalis</h3>
                    <p>Rp 450.000</p>
                </div>
                <div class="product-card">
                    <div class="product-thumb">Foto Produk 2</div>
                    <h3>Jaket Katun Kasual</h3>
                    <p>Rp 750.000</p>
                </div>
                <div class="product-card">
                    <div class="product-thumb">Foto Produk 3</div>
                    <h3>Celana Linen Santai</h3>
                    <p>Rp 380.000</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Verde Fashion. Hak Cipta Dilindungi.</p>
    </footer>
</body>
</html>
```

### 4. File public/css/style.css

File ini mengimplementasikan gaya visual bersih dan modern yang sesuai dengan referensi desain Anda.

```css
body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #ffffff;
    color: #1a1a1a;
}

.navbar {
    display: table;
    width: 100%;
    padding: 20px 40px;
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
}

.logo {
    display: table-cell;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
}

.menu {
    display: table-cell;
    text-align: center;
}

.menu a {
    margin: 0 15px;
    text-decoration: none;
    color: #1a1a1a;
    font-size: 14px;
    text-transform: uppercase;
}

.cart-icon {
    display: table-cell;
    text-align: right;
    font-size: 14px;
}

.hero-section {
    padding: 60px 40px;
    background-color: #f9f9f9;
}

.hero-text {
    width: 50%;
    float: left;
    padding-top: 40px;
}

.hero-text h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero-text p {
    font-size: 16px;
    color: #666666;
    margin-bottom: 30px;
}

.btn-primary {
    display: inline-block;
    padding: 12px 30px;
    background-color: #1a1a1a;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
}

.hero-image {
    width: 50%;
    float: right;
}

.placeholder-image {
    width: 100%;
    height: 400px;
    background-color: #e0e0e0;
    text-align: center;
    line-height: 400px;
    color: #666666;
}

.featured-products {
    clear: both;
    padding: 60px 40px;
}

.featured-products h2 {
    font-size: 28px;
    margin-bottom: 40px;
    text-align: center;
}

.product-grid {
    width: 100%;
    display: table;
}

.product-card {
    display: table-cell;
    width: 33.33%;
    padding: 0 15px;
    box-sizing: border-box;
}

.product-thumb {
    width: 100%;
    height: 350px;
    background-color: #f0f0f0;
    text-align: center;
    line-height: 350px;
    color: #888888;
    margin-bottom: 15px;
}

.product-card h3 {
    font-size: 16px;
    margin-bottom: 5px;
}

.product-card p {
    color: #666666;
    font-size: 14px;
}

footer {
    text-align: center;
    padding: 40px;
    border-top: 1px solid #eeeeee;
    font-size: 14px;
    color: #888888;
}
```

## Cara Menguji Secara Lokal

1. Buka kembali terminal Anda di dalam folder proyek.
2. Jalankan perintah npm start untuk mengaktifkan server Node.js.
3. Buka peramban web Anda.
4. Masuk ke alamat http://localhost:3000 untuk melihat hasilnya.

Anda dapat memasukkan file gambar aset pakaian dari desain Behance ke dalam folder public/images/ lalu memperbarui tag gambar di file HTML untuk menyempurnakan visualisasi aplikasi.
