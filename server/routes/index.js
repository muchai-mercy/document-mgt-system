const usersController = require('../controllers').users;
const documentController = require('../controllers').document;

module.exports = (app) => {
app.get('/api', (req,res) => res.status(200).send({
  message: "Document Management System"
}));
app.post('/api/users', usersController.create);
app.get('/api/users', usersController.list);
app.post('/api/users/:userId/title', documentController.create);
app.get('/api/users/:userId', usersController.retrieve);
app.post('/api/document', documentController.create);
app.get('/api/document', documentController.list);
app.get('/api/document/:userId', documentController.retrieve);
}
