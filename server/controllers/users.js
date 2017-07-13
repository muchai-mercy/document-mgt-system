const { hashSync, compareSync, genSaltSync } = require('bcrypt-nodejs');
const { sign } = require('jsonwebtoken');
const secretKey = process.env.SECRET_TOKEN_KEY;
const db = require('../models');
const User = db.Users;
const Documents = db.Documents;

function generateToken(payload, secretSessionKey, expiresIn) {
  return sign({
    data: {
      id: payload.id, username: payload.username, role: payload.role
    }
  }, secretSessionKey, { expiresIn });
}

function bcrypt(password) {
  return hashSync(password, genSaltSync(10));
}

module.exports = {
  // create new user
  create(req, res) {
    const hashedPassword = bcrypt(req.body.password);
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
      })
      .then(user => res.status(201).send(user), {
        message: "User created!"
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  //login a user
  login(req, res) {
    const { email } = req.body;

    User.findOne({ where: { email } })
      .then((user) => {
        if (!user) {
          return res.status(403).send({
            message: `User of email ${email} does not exist`
          });
        }

        // compare the password to make sure it matched with the stored password
        if (!compareSync(req.body.password, user.password)) {
          return res.status(401).send({
            message: 'Wrong password/email combinations'
          });
        }

        const token = generateToken(user, secretKey, '24h');
        req.user = user;
        return res.status(200).send({
          message: 'Successfully logged in',
          token,
          username: user.username,
          id: user.id,
          role: user.role
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
          model: Documents,
          as: 'documents'
        }]
      })
      .then(user => {
        res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },

  // retrieve users by Id
  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Documents,
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
      .catch(error => {
        res.status(400).send(error);
      });
  },

  // update username details
  update(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          });
        }
        if (req.body.password) {
          const hashedPassword = bcrypt(req.body.password);
          return user
            .update({
              firstName: req.body.firstName || user.firstName,
              lastName: req.body.lastName || user.lastName,
              username: req.body.username || user.username,
              password: req.body.password || user.password,
              email: req.body.email || user.email,
              role: req.body.role || user.role
            })
            .then(() => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
        }
        return user.update();
      });
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
            firstName: req.body.firstName || user.firstName,
            lastName: req.body.lastName || user.lastName,
            username: req.body.username || user.username,
            password: req.body.password || user.password,
            email: req.body.email || user.email,
            role: req.body.role || user.role
          })
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      });
  },

  //search for a user by query input
  findByq(req, res) {
    return User
      .findAll({
        where: {
          $or: [
            { username: { $ilike: `%${req.query.q}%` } },
            { email: { $ilike: `%${req.query.q}%` } }
          ]
        }
      })
      .then(response => res.status(200).send(response))
      .catch(error => res.status(400).send(error));
  }
};
