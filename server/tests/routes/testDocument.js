const request = require('supertest');
const app = require('../../../app');
const expect = require('chai').expect;
const users = ('../../controllers/document.js');

describe('User', () => {
  it('returns a list of users', (done) => {
    request(app)
    .get('/documents')
      .set('Accept', 'application/json')
      .expect(200)
    .end((err, res) => {
        expect(res.body).to.be.an('object');
    done();
  });
  });
  it('it should have a header', (done) => {
    request(app)
    .get('/documents')
    .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.be.a("string");
        expect(res.body.message).to.include("Let's get this started!")
        done();
      });
  });
});
