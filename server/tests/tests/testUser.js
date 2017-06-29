const request = require('supertest');
const expect = require('chai').expect;
const chai = require('chai');
let should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../../app');
const User = ('../../controllers/users.js');

chai.use(chaiHttp);
let token = '';

describe('Users', () => {
  // login
  beforeEach('login user', (done) => {
    chai.request(app)
      .post('/api/users/login')
      .send({ email: 'testing@gmail.com', password: 'tests' })
      .then((res) => {
        token = res.body.token;
        done();
      });
  });
  describe('/GET/users', () => {
    it('should GET all users', (done) => {
      chai.request(app)
        .get('/api/users')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
describe('/GET user by id', () => {
  it('should GET a user by its id', (done) => {
    chai.request(app)
      .get('/api/users/1')
      .set('access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
describe('/SEARCH/user', () => {
  it('should find a user by when searched', (done) => {
    chai.request(app)
      .get('/search/users/?q=Mikey')
      .set('access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
// Test the POST route
describe('/POST user', () => {
  it('should create a new user', (done) => {
    chai.request(app)
      .post('/api/users/')
      .set('access-token', token)
      .send({
        firstName: "Mike",
        lastName: "Mikey",
        username: "mikey",
        email: "mickeyy@ymail.com",
        password: "mikey",
        role: 'User'
      })
      .set('access-token', token)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('/GET/users', () => {
  it('should GET users and paginate', (done) => {
    chai.request(app)
      .get('/api/users/?limit=3&offset=0')
      .set('access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('/GET/search/users/?q={}', () => {
  it('it should GET a user by searching', (done) => {
    chai.request(app)
      .get('/search/users/?q=mi')
      .set('access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
