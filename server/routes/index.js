const usersController = require('../controllers').users;
const documentController = require('../controllers').document;

module.exports = (app) => {
app.get('/api', (req,res) => res.status(200).send({
  message: "Document Management System"
}));
app.post('/api/users', usersController.create);
app.get('/api/users', usersController.list);
app.get('/api/users/:userId', usersController.retrieve);
app.put('/api/users/:userId', usersController.update);
app.delete('/api/users/:userId', usersController.destroy);
app.post('/api/users/:userId/title', documentController.create);
app.post('/api/document', documentController.create);
app.get('/api/document', documentController.list);
app.get('/api/document/:userId', documentController.retrieve);
app.put('/api/document/:userId', documentController.update);
app.delete('/api/document/:userId', documentController.destroy);
}
