const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'home', 'home.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'projects', 'projects.html'));
});

app.get('/certificates', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'certificates', 'certificates.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});