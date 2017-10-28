module.exports = {
  checkPermission: ('read', (req, res, next) => {
    console.log(req.user);
    next();
  })
}