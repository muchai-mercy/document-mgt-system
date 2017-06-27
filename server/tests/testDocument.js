const request = require('supertest');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../app');
const users = ('../controllers/document.js');

chai.use(chaiHttp);
let token = '';


describe('Documents', () => {
  // login /
  beforeEach('login user', (done) => {
    chai.request(app)
      .post('/api/users/login')
      .send({ email: 'tests@gmail.com', password: 'tests' })
      .then((res) => {
        token = res.body.token;
        done();
      });
  });

  describe('/GET', () => {
    it('returns a list of existing documents', (done) => {
      chai.request(app)
        .get('/api/documents/')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe('/GET/document by id', () => {
    it('should GET a document by its id', (done) => {
      chai.request(app)
        .get('/api/documents/1')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe('/SEARCH/document', () => {
    it('it should find docs when searched', (done) => {
      chai.request(app)
        .get('/search/documents/')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/POST document', () => {
    it('should create a document', (done) => {
      chai.request(app)
        .post('/api/documents/')
        .send({
          title: "Men",
          content: "Here we go",
          category: "Private",
          userId: 4
        })
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('should GET documents and paginate', (done) => {
      chai.request(app)
        .get('/api/documents/?limit=3&offset=0')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });


  describe('/DELETE document', () => {
    it('should return a 404 response', (done) => {
      chai.request(app)
        .delete('/api/document/77')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET/search/documents/?q={}', () => {
    it('it should GET a document by searching', (done) => {
      chai.request(app)
        .get('/api/search/documents/?q=men')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
