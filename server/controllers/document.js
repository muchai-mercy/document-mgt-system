const db = require('../models');
const Document = db.Document;
const Users = db.Users;

module.exports = {
  create(req, res) {
    return (Document
      .create({
        title: req.body.title,
        content: req.body.content,
        userId: req.body.userId,
      }))
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Document
      .findAll()
      .then(document => res.status(200).send(document))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Document
      .findById(req.params.userId, {
      })
      .then(document => {
        if (!document) {
          res.status(404).send({
            message: 'Document not found'
          });
        }
        return res.status(200).send(document);
      })
      .catch(error => {res.status(400).send(error)
      }
      );
  }
};
