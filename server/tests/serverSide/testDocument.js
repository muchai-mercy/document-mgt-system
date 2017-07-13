const request = require('supertest');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../../app');

chai.use(chaiHttp);
let token = '';

describe('Documents', (done) => {
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
    it('returns a list of existing documents', () => {
      chai.request(app)
        .get('/api/documents/')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });

  describe('/GET/document by id', (done) => {
    it('should GET a document by its id', () => {
      chai.request(app)
        .get('/api/documents/1')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe('/SEARCH/document', (done) => {
    it('it should find docs when searched', () => {
      chai.request(app)
        .get('/search/documents/')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/POST document', (done) => {
    it('should create a document', () => {
      chai.request(app)
        .post('/api/documents')
        .set('access-token', token)
        .send({
          title: "Men",
          content: "Here we go",
          category: "Private",
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/GET/documents', (done) => {
    it('should GET documents and paginate', () => {
      chai.request(app)
        .get('/api/documents/?limit=3&offset=0')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });


  describe('/DELETE document', (done) => {
    it('should return a 404 response', () => {
      chai.request(app)
        .delete('/api/document/77')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET/search/documents/?q={}', (done) => {
    it('it should GET a document by searching', () => {
      chai.request(app)
        .get('/api/search/documents/?q=men')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe('/POST', (done) => {
    it('should return a 403 response while some specified fields are empty', () => {
      it('should create a document', () => {
        chai.request(app)
          .post('/api/documents')
          .send({
            title: "Men",
            content: "Here we go",
            category: "Private",
            userId: 1
          })
          .set('access-token', token)
          .end((err, res) => {
            res.should.have.status(403);
            done();
          });
      });
    });
  });
});
