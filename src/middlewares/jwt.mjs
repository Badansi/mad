import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
const expiry = process.env.JWT_EXPIRY;

const getToken = (user) => {
  return jwt.sign({
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    role: user.role
  }, secret, {
    expiresIn: expiry
  });
};

const checkToken = (req, res, next) => {
  let token = req.headers.authorization;

  if(token) {
    token = token.replace("Bearer ", "");
    jwt.verify(token, secret, (err, decoded) => {
      if(err) {
        res.status(400).json({
          message: 'Token invalid'
        });
        return; 
      }

      req.decoded = decoded;
      next();
    });
  } else {
    res.status(401).json({
      message: 'No auth token provided'
    });
  }
};

export { getToken, checkToken };
