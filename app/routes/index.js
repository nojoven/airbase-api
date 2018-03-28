const routes = require('express').Router();
const controller = require('./airports');

routes.get('/airports', controller);

module.exports = routes;