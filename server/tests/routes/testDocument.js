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
  it('returns the newly created document', (done) => {
    request(app)
      .post('/documents')
      .send({
        title: "react",
        content: "I love react"
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done();
      });
  });
});

