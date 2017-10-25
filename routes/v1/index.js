const mainRoute = require('express').Router();
const registerRoutes = require('./registerRoutes');
const loginRoutes = require('./loginRoutes');

//middleware
mainRoute.use('/register/users', registerRoutes);
mainRoute.use('/login', loginRoutes);

module.exports = mainRoute;