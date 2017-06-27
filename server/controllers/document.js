const db = require('../models');
const Document = db.Document;
const Users = db.Users;

module.exports = {
  //create new document
  create(req, res) {
    return Document
      .create({
        title: req.body.title,
        content: req.body.content,
        userId: req.body.userId,
        category: req.body.category
      })
        .then(document => {
          res.status(201).send(document);
        })
          .catch(error => {
            res.status(400).send(error);
          });
  },

  //list all existing documents 
  list(req, res) {
    let documentQuery = {};
      // if not admin get only the docs belonging to the authenticated user
    if(req.decoded.data.role != "Admin"){
      documentQuery["where"] = {userId: req.decoded.data.id};
    }
    if (req.query.limit || req.query.offset) {
      documentQuery["offset"] = req.query.offset;
      documentQuery["limit"] = req.query.limit;
      return Document.findAll(documentQuery)
        .then(document => res.status(200).send(document))
        .catch(error => res.status(400).send(error));
    }
    return Document
      .findAll(documentQuery)
      .then(document => res.status(200).send(document))
      .catch(error => res.status(400).send(error));
  },

  //retrieve documents by Id
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
      .catch(error => {
        res.status(400).send(error);
      });
  },

  //update document detail
  update(req, res) {
    return Document
      .findById(req.params.userId)
      .then(document => {
        if (!document) {
          res.status(404).send({
            message: 'Document Not Found'
          });
        }
        return document
          .update({
            title: req.body.title || document.title,
            content: req.body.content || document.content,
            category: req.body.category || document.category
          })
          .then(() => res.status(200).send(document))
          .catch(error => res.status(400).send(error));
      });
  },

  //delete a document
  destroy(req, res) {
    return Document
      .findById(req.params.userId)
      .then(document => {
        if (!document) {
          res.status(404).send({
            message: 'Document Not Found'
          });
        }
        return document
          .destroy({
            title: req.body.title || document.title,
            content: req.body.content || document.content,
            userId: req.body.userId || document.userId
          })
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      });
  },

  //search a document by title
  findByTitle(req, res) {
    return Document
      .findAll({
        where: {
          title: { $ilike: `%${req.query.q}%` }
        }
      })
      .then(response => res.status(200).send(response))
      .catch(error => res.status(400).send(error));
  },
  //get all public documents
    findPublicDocs(req, res) { 
    return Document
    .findAll({
       where: {
        category: { $iLike: 'Public' }
      }
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'No Documents Found',
          });
        }
        return res.status(200).send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }
};

