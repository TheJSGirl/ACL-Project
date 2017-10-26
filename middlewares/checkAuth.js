var jwt = require('jsonwebtoken');
const {sendResponse} = require('../helper');

const checkAuth = async(req, res, next) => {
  const token = req.header('x-auth');
  // console.log(req.header);
  // console.log('token => ', token);
  
  if(!token || typeof token === 'undefined'){
      return res.status(401).json({
          status: 'failed',
          err: 'invalid token'
      });
  }

  try{
    //decode the token 
    const decode = await jwt.verify(token, 'abcdefghigkl');
    console.log(decode);
    req.user = decode;
    next();
  }
  catch(err){
    // always log error in case of 500
    console.log(err); 
    if(err.name === 'TokenExpiredError'){
        return sendResponse(res, 401, [], 'Token is expired');
    }
    return sendResponse(res, 500, [], 'something is wrong');
  }
}

module.exports = checkAuth;