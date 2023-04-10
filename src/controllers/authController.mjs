import { User } from "../models";
import bcrypt from 'bcrypt';
import { getToken } from "../middlewares/jwt";

const authController = {
  login: async (req, res, next) => {
    try {
      const user = await User.scope('withPassword').findOne({
        where: {
          email: req.body.email,
        }
      });
      if(user) {
        if(await bcrypt.compare(req.body.password, user.password)) {
          res.json({
            token: getToken(user)
          });
        } else {
          res.status(401);
          throw new Error("401 - Wrong email or password");
        }
      } else {
        res.status(401);
        throw new Error("401 - Wrong email or password");
      }      
    } catch(err) {
      console.error(err);
      next(err);
    }        
  }
}

export default authController;
