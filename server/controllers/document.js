const db = require('../models');
const Document = db.Document;

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
  }
};
