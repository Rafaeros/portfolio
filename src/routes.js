const express = require('express');
const path = require('path');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/home.html'));
});

routes.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/projects.html'));
});

routes.get('/certificates', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/certificates.html'));
});

module.exports = routes;