const registerRoutes = require('express').Router();
const pool = require('../../db');
const bcrypt = require('bcrypt');
const {sendResponse} = require('../../helper');
const {check} = require('express-validator/check');



registerRoutes.route('/')
    .post(async (req, res) => {

    //validating the email password and name
    req.check('user_name', 'must required').exists().isLength({min:5});
    req.check('email', 'invalid email').exists().isEmail();
    req.check('password', 'invalid credentials').exists().isLength({min:5});

    let errors = req.validationErrors();
    if(errors){
        console.log(error);
        return res.status(400).json({
            data:[],
            message:errors[0].msg
        });
    }

    console.log(req.body);
    const {user_name, email, password} = req.body;
    

    try{

    // if(!email || !user_name || !password){
    // return res.status(400).json({
    // data: [],
    // status: 'failed',
    // message: 'invalid parameters'
    // });
    // }

    const hashedpass = await bcrypt.hash(password, 10);

    const user_detail = {
    user_name,
    email,
    password: hashedpass
    };

    const [data] = await pool.query('INSERT INTO users SET ?', user_detail);
    console.log('data from database', data);

    //handle empty data
    //********************************************************************/
    if(data.length === 0){

        return sendResponse(res, 404, [ ], 'user not found');
    }

    
    return sendResponse(res, 200, data, 'saved successfylly');

    }
    catch(err){
    console.log(err);
    
    if(code === 'ER_DATA_TOO_LONG'){
        return sendResponse(res, 500, [], 'password too long');
    }

    return sendResponse(res, 500, [], 'something went wrong');
    
    }
    })

module.exports = registerRoutes;