const feedRoutes = require('express').Router();
const pool = require('../../db');


feedRoutes.route('/')
  .get((req, res) => {
    res.send('feed route');
  });

module.exports = feedRoutes;