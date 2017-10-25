module.exports = {
  sendResponse: (res, statusCode, data, message) => {

    //check message should be a string
    if(typeof message !== 'string'){
      throw new Error('Message should be a string');
    }

    //check statusCode length should be 3 digit number
    const lengthPattern = /^[0-9]{3}$/;

    if(!lengthPattern.test(statusCode)){
      throw new Error('httpcode should be in 3 digit');
    }
    //set pattern if status code starts with 2 
    let setPattern =  /^2\d{2}$/;

    //if statusCode starts with 2 than set as 'ok' else 'failed'
    setPattern.test(statusCode) ? status ='ok' : status = 'failed';
    
    return res.status(statusCode).json({
      data,
      status,
      message
    });
  }
}