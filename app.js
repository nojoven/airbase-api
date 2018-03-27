const express = require('express');
const app = express();
const routes = require('./src/airports');

app.use('/', routes)

app.listen(8080);