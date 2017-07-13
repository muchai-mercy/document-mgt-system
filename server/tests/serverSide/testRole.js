const request = require('supertest');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../../app');

chai.use(chaiHttp);
let token = '';

describe('Roles', () => {
  beforeEach('login user', () => {
    chai.request(app)
      .post('/api/users/login')
      .send({ email: 'tests@gmail.com', password: 'tests' })
      .then((res) => {
        token = res.body.token;
      });
  describe('/GET/roles', () => {
    it('should GET all roles', (done) => {
      chai.request(app)
        .get('/api/roles')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
  describe('/GET/role by id', (done) => {
    it('should GET a role by its id', () => {
      chai.request(app)
        .get('/api/roles/1')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('should return a 404', () => {
      chai.request(app)
        .get('/api/roles/11')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe('/POST role', () => {
    it('should create a role', (done) => {
      chai.request(app)
        .post('/api/roles')
        .set('access-token', token)
        .send({
          role: "Book Author"
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
  describe('/PUT role', () => {
    it('should update a role', (done) => {
      chai.request(app)
        .put('/api/roles/3')
        .set('access-token', token)
        .send({
          role: "Developers"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it('should return a 404', (done) => {
      chai.request(app)
        .put('/api/roles/33')
        .set('access-token', token)
        .send({
          role: "Developers"
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe('/GET/role', () => {
    it('should GET roles and paginate', (done) => {
      chai.request(app)
        .get('/api/roles/?limit=2&offset=0')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/DELETE role', () => {
    it('should return a 404 response', (done) => {
      chai.request(app)
        .delete('/api/roles/77')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe('/DELETE role', () => {
    it('should return a 204 response', (done) => {
      chai.request(app)
        .delete('/api/roles/4')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
  describe('/GET/search/roles/?q={}', () => {
    it('it should GET a role by searching', () => {
      chai.request(app)
        .get('/api/search/roles/?q=a')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});
