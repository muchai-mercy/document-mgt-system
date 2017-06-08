const usersController = require('../controllers').users;
const documentsController = require('../controllers').document;

module.exports = (app) => {
app.get('/api', (req,res) => res.status(200).send({
  message: "Document Management System"
}));
app.post('/api/users', usersController.create);
app.get('/api/users', usersController.list);
app.get('get/users/?limit={integer}&offset={integer}', usersController.list);
app.get('/api/users/:userId', usersController.retrieve);
app.put('/api/users/:userId', usersController.update);
app.delete('/api/users/:userId', usersController.destroy);
app.get('/api/users/:userId/title', usersController.list);
app.post('/api/documents', documentsController.create);
app.get('/api/documents/', documentsController.list);
app.get('get/documents/?limit={integer}&offset={integer}', documentsController.list);
app.get('/api/documents/:userId', documentsController.retrieve);
app.put('/api/documents/:userId', documentsController.update);
app.delete('/api/documents/:userId', documentsController.destroy);
}
