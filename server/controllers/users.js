const db = require('../models')
const User = db.Users;
const Document = db.Document;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Document,
          as: 'documents',
          offset: 5,
          limit: 5,
        }]
      })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
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
  update(req, res) {
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
        return user
          .update({
            username: req.body.username || user.username,
            password: req.body.password || user.password,
            email: req.body.email || user.email
          })
          .then(() => res.status(200).send(user))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
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
};
