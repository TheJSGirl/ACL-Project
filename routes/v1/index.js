const mainRoute = require('express').Router();
const registerRoutes = require('./registerRoutes');
const loginRoutes = require('./loginRoutes');
const {checkAuth, checkPermission} = require('../../middlewares');
const feedRoutes = require('./feedRoutes');

//middleware
mainRoute.use('/register/users', registerRoutes);
mainRoute.use('/login', loginRoutes);
mainRoute.use('/user/feeds',checkAuth, checkPermission('read'),feedRoutes );

module.exports = mainRoute;