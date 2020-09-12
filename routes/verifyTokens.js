const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Yummm, cookies!
  // We set the token to a cookie on the client-side using "res.cookie('auth', token);" when the user succesfully authenticated. Now this cookie gets sent from the browser to node on every request if it exists.
  console.log('verify request', req);
  
  var token = req.cookies && req.cookies.authToken;

  if (!token) return res.status(401).send("access denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
