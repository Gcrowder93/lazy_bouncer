const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const { session } = req.cookies;
    const payload = jwt.verify(session, process.env.JWT_SECRET);
    req.user = payload;

    next();
  } catch (error) {
    error.message = 'Must be signed in';
    error.status = 401;
    next(error);
  }
};
