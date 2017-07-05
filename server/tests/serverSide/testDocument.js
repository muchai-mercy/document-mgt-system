const request = require('supertest');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../../../app');

chai.use(chaiHttp);
let token = '';

describe('Documents', () => {

  beforeEach('login user', () => {
    chai.request(app)
      .post('/api/users/login')
      .send({ email: 'tests@gmail.com', password: 'tests' })
      .then((res) => {
        token = res.body.token;
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

  describe('/GET/document by id', () => {
    it('should GET a document by its id', () => {
      chai.request(app)
        .get('/api/documents/1')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
  describe('/SEARCH/document', () => {
    it('it should find docs when searched', () => {
      chai.request(app)
        .get('/search/documents/')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });

  describe('/POST document', () => {
    it('should create a document', () => {
      chai.request(app)
        .post('/api/documents/')
        .send({
          title: "Men",
          content: "Here we go",
          category: "Private",
          access: "Admin",
          userId: 1
        })
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(201);
        });
    });
  });

  describe('/GET/documents', () => {
    it('should GET documents and paginate', () => {
      chai.request(app)
        .get('/api/documents/?limit=3&offset=0')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });


  describe('/DELETE document', () => {
    it('should return a 404 response', () => {
      chai.request(app)
        .delete('/api/document/77')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
        });
    });
  });

  describe('/GET/search/documents/?q={}', () => {
    it('it should GET a document by searching', () => {
      chai.request(app)
        .get('/api/search/documents/?q=men')
        .set('access-token', token)
        .end((err, res) => {
          res.should.have.status(200);

        });
    });
  });
});
