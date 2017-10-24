const mainRoute = require('express').Router();
const registerRoutes = require('./registerRoutes');

mainRoute.use('/register/users', registerRoutes);

module.exports = mainRoute;