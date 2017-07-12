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
  });

  describe('/GET', () => {
    it('returns a list of existing roles', () => {
      chai.request(app)
        .get('/api/roles/')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });

  describe('/GET/role by id', () => {
    it('should GET a role by its id', () => {
      chai.request(app)
        .get('/api/roles/1')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
  describe('/SEARCH/role', () => {
    it('it should find role when searched', () => {
      chai.request(app)
        .get('/search/roles/')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });

  describe('/POST role', () => {
    it('should create a role', () => {
      chai.request(app)
        .post('/api/role/')
        .send({
          role: "Book Author"
        })
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(201);
        });
    });
  });

  describe('/GET/role', () => {
    it('should GET roles and paginate', () => {
      chai.request(app)
        .get('/api/roles/?limit=3&offset=0')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });


  describe('/DELETE role', () => {
    it('should return a 404 response', () => {
      chai.request(app)
        .delete('/api/role/77')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
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
