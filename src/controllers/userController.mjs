import { User } from "../models/index.mjs";
import bcrypt from 'bcrypt';

const userController = {
  async getAll(req, res, next) {
    try {
      const query = {};

      if(req.query.include) {
        query.include = req.query.include.split(',');
      }

      console.log(query);
      const users = await User.findAll(query);

      res.json(users);
    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async getOne(req, res, next) {
    try {
      const query = {};

      if(req.query.include) {
        query.include = req.query.include.split(',');
      }

      const user = await User.findByPk(req.params.id, query);
      
      if(user) {
        res.json(user);
        return;
      } else {
        res.status(404);
        throw new Error("404 - User not found");
      }
    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const userData = req.body;

      if(userData.password) {
        userData.password = await bcrypt.hash(userData.password, 10);
      }

      const user = await User.create(userData);
      
      res.json(user);

    } catch(err) {
      console.error(err);
      next(err);
    }

  },
  async update(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id);
      
      if(user) {
        const userData = req.body;

        if(userData.password) {
          userData.password = await bcrypt.hash(userData.password, 10);
        }
  
        await user.update(userData);

        res.json(user);
        return;
      } else {
        res.status(404);
        throw new Error("404 - User not found");
      }
    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id);
      
      if(user) {
        await user.destroy();
        res.json({
          delete: 'ok'
        });
        return;
      } else {
        res.status(404);
        throw new Error("404 - User not found");
      }
    } catch(err) {
      console.error(err);
      next(err);
    }
  }

}

export default userController;
