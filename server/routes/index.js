const usersController = require('../controllers').users;
const documentsController = require('../controllers').document;
const authenticate = require('./../controllers/authenticate/authenticate');

module.exports = (app) => {
app.get('/api', (req,res) => res.status(200).send({
  message: "Document Management System"
}));
app.post('/api/users', usersController.create);
app.post('/api/users/login', usersController.login);
app.get('/api/documents/public', documentsController.findPublicDocs);
app.use('/api', authenticate.token);
app.get('/api/users', usersController.list);
app.get('/api/get/users/?limit={integer}&offset={integer}', usersController.list);
app.get('api/get/users/:userId/documents', usersController.list);
app.get('/api/users/:userId', usersController.retrieve);
app.put('/api/users/:userId', usersController.update);
app.delete('/api/users/:userId', usersController.destroy);
app.get('/api/users/:userId/title', usersController.list);
app.get('/api/search/users/', usersController.findByq);

app.post('/api/documents', documentsController.create);
app.get('/api/documents/', documentsController.list);
app.get('get/documents/?limit={integer}&offset={integer}', documentsController.list);
app.get('/api/documents/:userId', documentsController.retrieve);
app.put('/api/documents/:userId', documentsController.update);
app.delete('/api/documents/:userId', documentsController.destroy);
app.get('/api/search/documents/', documentsController.findByTitle);
};
