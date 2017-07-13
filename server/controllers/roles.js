const secretKey = process.env.SECRET_TOKEN_KEY;
const db = require('../models');
const Role = db.Roles;
const Users = db.Users;

module.exports = {
  // create new role
  create(req, res) {
    return Role
      .create({
        role: req.body.role,
      })
      .then(role => res.status(201).send(role), {
        message: "Role created!"
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  // list all roles inclusive of their users and paginate
  list(req, res) {
    if (req.query.limit || req.query.offset) {
      return Role.findAll({
        offset: req.query.offset,
        limit: req.query.limit
      })
        .then(role => res.status(200).send(role))
        .catch(error => res.status(400).send(error));
    }
    return Role
      .findAll()
      .then(role => res.status(200).send(role))
      .catch(error => res.status(400).send(error));
  },

  // retrieve roles by Id
  retrieve(req, res) {
    return Role
      .findById(req.params.id)
      .then(role => {
        if (!role) {
          res.status(404).send({
            message: 'Role Not Found'
          });
        }
        return res.status(200).send(role);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  // update role details
  update(req, res) {
    return Role
      .findById(req.params.id)
      .then(role => {
        if (!role) {
          res.status(404).send({
            message: 'Role Not Found'
          });
        }
        return role
          .update({
            role: req.body.role || role.role,
          })
          .then(() => res.status(200).send(role))
          .catch(error => res.status(400).send(error));
      });
  },

  //delete a role
  destroy(req, res) {
    return Role
      .findById(req.params.id)
      .then(role => {
        if (!role) {
          res.status(404).send({
            message: 'Role Not Found'
          });
        }
        return role
          .destroy({
            role: req.body.role || role.role,
          })
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      });
  },

  //search for a role by query input
  findByq(req, res) {
    return Role
      .findAll({
        where: {
          $or: [
            { role: { $ilike: `%${req.query.q}%` } }
          ]
        }
      })
      .then(response => res.status(200).send(response))
      .catch(error => res.status(400).send(error));
  }
};
