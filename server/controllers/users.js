const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_TOKEN_KEY;
const db = require('../models');
const User = db.Users;
const Document = db.Document;

module.exports = {
  // create new user
  create(req, res) {
    bcrypt.hash(req.body.password, 2, (err, hash) => {
      // Store hash in password DB. 
      return User
        .create({
          username: req.body.username,
          password: hash,
          email: req.body.email,
        })
        .then(user => res.status(200).send(user), {
          message: "User created!"
        })
        .catch(error => res.status(400).send(error));
    });
  },

  //login a user
  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (!user) {
          return res.status(403).send({
            message: 'Invalid user',
          });
        }
        bcrypt.compare(req.body.password, user.password)
          .then((match) => {
            if (match) {
              const token = jwt.sign({ data: user.id }, secretKey, { expiresIn: '24h' });
              req.user = user;
              res.status(200).send({
                message: 'Successfully logged in',
                token
              });
            } else {
              res.status(401).send({
                message: 'Wrong password/username combinations',
              });
            }
          })
          .catch(() => {
            res.status(401).send({
              message: 'Wrong password/username combination',
            });
          })
      })
      .catch(() => {
        res.status(401).send({
          error: 'Wrong password/username combination'
        });
      });
  },

  // list all users inclusive of their documents and paginate
  list(req, res) {
    if (req.query.limit || req.query.offset) {
      return User.findAll({
        offset: req.query.offset,
        limit: req.query.limit
      })
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error));
    }
    return User
      .findAll({
        include: [{
          model: Document,
          as: 'documents'
        }]
      })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },

  // retrieve users by Id
  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Document,
          as: 'documents'
        }]
      })
      .then(user => {
        if (!user) {
          res.status(404).send({
            message: 'User Not Found'
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => { res.status(400).send(error) });
  },

  // update username details
  update(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          res.status(404).send({
            message: 'User Not Found'
          });
        } else {
          if (req.body.password) {
            bcrypt.hash(req.body.password, 2, (err, hash) => {
              return user
                .update({
                  username: req.body.username || user.username,
                  password: hash,
                  email: req.body.email || user.email
                })
                .then(() => res.status(200).send(user))
                .catch(error => res.status(400).send(error));
            });
          } else {
            return user.update();
          }
        }
      })
      .catch(error => res.status(400).send(error));
  },

  //delete a user
  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          res.status(404).send({
            message: 'User Not Found'
          });
        }
        return user
          .destroy({
            username: req.body.username || user.username,
            password: req.body.password || user.password,
            email: req.body.email || user.email
          })
          .then(() => res.status(200).send({ message: 'User successfully deleted' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  //search for a user by query input
  findByq(req, res) {
    return User
      .findAll({
        where: {
          $or: [
            { username: { $like: `%${req.query.q}%` } },
            { email: { $like: `%${req.query.q}%` } }
          ]
        }
      })
      .then(response => res.status(200).send(response))
      .catch(error => res.status(400).send(error));
  },
}
