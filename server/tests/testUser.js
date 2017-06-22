const request = require('supertest');
const app = require('../../app');
const expect = require('chai').expect;
const chai = require('chai');
let should = chai.should();
const chaiHttp = require('chai-http');
const User = ('../controllers/users.js');

chai.use(chaiHttp);

// describe('Users', () => {
//   beforeEach((done) => {
//     User.remove({}, (err) => {
//       done();
//     });
//   });

// Test the GET route
describe('/GET users', () => {
  it('it should GET all the users', (done) => {
    request(app)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        // res.body.length.should.be.eql(0);
        done();
      });
  });
});
// it('it should return a list of users', (done) => {
//   request(app)
//     .get('/users')
//     .expect(200)
//     .end((err, res) => {
//       expect(res.body.message).to.be.a("string");
//       expect(res.body.message).to.include("Let's get this started!");
//       done();
//     });
// });

// Test the POST route
it('it should POST a new user', (done) => {
  let user = {
    firstName: "Ray",
    lastName: "RayRay",
    email: 'melcmill@yahoo.com',
    username: 'melcmillerz',
    password: 'jjjjj'
  };
  request(app)
    .post('/users')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message').eql('Book successfully added!');
      res.body.user.should.have.property('firstName');
      res.body.user.should.have.property('lastName');
      res.body.user.should.have.property('email');
      res.body.user.should.have.property('username');
      res.body.user.should.have.property('password');
      done();
    });
});

// Test the PUT route

describe('/PUT/:id user', () => {
  it('it should UPDATE a user given the id', (done) => {
    let user = new User({
      firstName: "Ray",
      lastName: "RayRay",
      email: 'melcmill@yahoo.com',
      username: 'melcmillerz',
      password: 'jjjjj'
    });
    user.save((err, user) => {
      request(app)
        .put('/users/' + user.id)
        .send({
          firstName: "Ray",
          lastName: "RayRay",
          email: 'melcmill@yahoo.com',
          username: 'melcmill',
          password: 'jjjjj'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User updated!');
          res.body.book.should.have.property('username').eql('melcmill');
          done();
        });
    });
  });
});

// Test the DELETE route

describe('/DELETE/:id user', () => {
  it('it should DELETE a user given the id', (done) => {
    let user = new User({
      firstName: "Ray",
      lastName: "RayRay",
      email: 'melcmill@yahoo.com',
      username: 'melcmillerz',
      password: 'jjjjj'
    });
    user.save((err, user) => {
      request(app)
        .delete('/users/' + user.id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User successfully deleted!');
          res.body.book.should.have.property('ok').eql(1);
          done();
        });
    });
  });
});
