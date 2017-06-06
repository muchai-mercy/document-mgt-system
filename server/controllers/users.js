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
          as: 'Document',
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
        console.log("user", user)
        if (!user) {
          res.status(404).send({
            message: 'Document not found'
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => {
        console.log("error", error)
        res.status(400).send(error)
      }
        );
  },
};
