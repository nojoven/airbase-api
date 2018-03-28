const express = require('express');
const app = express();
const routes = require('./app/routes');

app.use('/', routes)

app.listen(process.env.PORT || 3000);