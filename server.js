const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const dataFile = path.join(__dirname, 'data', 'site-data.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

app.get('/api/data', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Gagal membaca data situs' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

app.post('/admin/save', (req, res) => {
    const newData = req.body;
    fs.writeFile(dataFile, JSON.stringify(newData, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: 'Gagal menyimpan data situs' });
        }
        res.json({ message: 'Data berhasil disimpan' });
    });
});

app.listen(PORT, () => {
    console.log('Server berjalan di http://localhost:' + PORT);
});
