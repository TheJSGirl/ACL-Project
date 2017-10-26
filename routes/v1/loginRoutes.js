const loginRoutes = require('express').Router();
const pool = require('../../db');
const bcrypt = require('bcrypt');
const {sendResponse} = require('../../helper');
const jwt = require('jsonwebtoken');

loginRoutes.route('/')
  .post(async (req, res) => {
    
    const{user_name, password} = req.body

    try{
      
      const [data] = await pool.query(`SELECT id, password ,userType FROM users WHERE user_name = '${user_name}'`);
      
      const passwordFromDb = data[0].password;

      const comparePassword = await bcrypt.compare(password, passwordFromDb);
      if(!comparePassword){
        return sendResponse(res, 401, [], 'wrong password');
      }

      const user_detail = {
        id: data[0].id,
        user_type: data[0].user_type
      }

      //generate token
      const token = jwt.sign(user_detail, 'abcdefghigkl', {expiresIn: 60 * 60});
      console.log(token);

      return res.header('x-auth', token).status(200).json({
        status: 'ok',
        message: 'welcome'
      });
    }
    catch(err){
      console.error(err);

      return sendResponse(res, 500, [], 'something went wrong');
    }

  })

  module.exports = loginRoutes;