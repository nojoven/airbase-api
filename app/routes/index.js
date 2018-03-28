const routes = require('express').Router();
const airports = require('./airports');
const countries = require('./countries');
const cities = require('./cities');
const ids = require('./ids');
const airportsRadar = require('./radar');


routes.get('/airports', airports);
routes.get('/airports/country', countries);
routes.get('/airports/city', cities);
routes.get('/airports/id', ids);
routes.get('/airports/radar', airportsRadar);


module.exports = routes;
