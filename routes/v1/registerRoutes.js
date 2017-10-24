const registerRoutes = require('express').Router();
const pool = require('../../db');
const bcrypt = require('bcrypt');

registerRoutes.route('/')
    .post( (req, res) => {

        const {user_name, email, password} = req.body;

        const hashedpass = await bcrypt.hash(password, 10);
        const user_detail = {
            user_name,
            email,
            password: hashedpass
        };

        

        const [result] = await pool.query('INSERT INTO users SET ?', user_detail);

    })

module.exports = registerRoutes;