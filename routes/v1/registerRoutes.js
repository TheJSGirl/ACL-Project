const registerRoutes = require('express').Router();
const pool = require('../../db');
const bcrypt = require('bcrypt');



registerRoutes.route('/')
    .post(async (req, res) => {

       try{
           console.log(req.body);
            const {user_name, email, password} = req.body;
            
                    if(!email || !user_name || !password){
                        return res.status(400).json({
                            data: [],
                            status: 'failed',
                            message: 'invalid parameters'
                        })
                    }
            
                    const hashedpass = await bcrypt.hash(password, 10);
                    
                    const user_detail = {
                        user_name,
                        email,
                        password: hashedpass
                    };
                    
                    const [data] = await pool.query('INSERT INTO users SET ?', user_detail);

                    return res.status(200).json({
                        data: data,
                        status: 'ok',
                        message:'saved successfully'
                    })
            
        }
        catch(err){
            console.error(err);
            return res.status(500).json({
                data: [],
                status: 'failed',
                message: 'something went wrong'
            })
        }
    })

module.exports = registerRoutes;