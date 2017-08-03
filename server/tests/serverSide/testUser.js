const request = require('supertest');
const expect = require('chai').expect;
const chai = require('chai');
let should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../../app');

chai.use(chaiHttp);
let token = '';

describe('Users', () => {
  // login
   beforeEach('login user', (done) => {
    chai.request(app)
      .post('/api/users/login')
      .send({ email: 'tests@gmail.com', password: 'tests' })
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
  describe('/GET user by id', () => {
    it('should GET a 200', (done) => {
      chai.request(app)
        .get('/api/users/1')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('should return a 404', (done) => {
      chai.request(app)
        .get('/api/users/22')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe('/SEARCH/user', () => {
    it('should find a user by when searched', (done) => {
      chai.request(app)
        .get('/api/search/users/?q=te')
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
          username: "mikeymike",
          email: "mike@ymail.com",
          password: "mikey",
          role: 'User'
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

describe('/PUT user', () => {
    it('should update a user', (done) => {
      chai.request(app)
        .put('/api/users/2')
        .set('access-token', token)
        .send({
          firstName: "Mike",
          lastName: "Mike",
          username: "mikeymike",
          email: "testrun@gmail.com",
          password: "testrun",
          role: 'User'
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('should return a 404', (done) => {
      chai.request(app)
        .put('/api/users/33')
        .set('access-token', token)
        .send({
          firstName: "Mike",
          lastName: "Mike",
          username: "mikeymike",
          email: "testrun@gmail.com",
          password: "testrun",
          role: 'Developer'
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
    describe('/LOGIN user', () => {
    it('should test no login for an non user', (done) => {
      chai.request(app)
        .post('/api/users/login')
        .send({ email: 'testsin@gmail.com', password: 'tests' })
        .end((err, res) => {
          res.should.have.status(403);
          done();
        });
    });
    it('should not accept wrong combinations', (done) => {
      chai.request(app)
        .post('/api/users/login')
        .send({ email: 'tests@gmail.com', password: 'tess' })
        .end((err, res) => {
          res.should.have.status(401);
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
  describe('/DELETE user', () => {
    it('should return a 204 response', (done) => {
      chai.request(app)
        .delete('/api/users/3')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
  describe('/DELETE user', () => {
    it('should return a 404 response', (done) => {
      chai.request(app)
        .delete('/api/users/77')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
