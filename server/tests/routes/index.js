supertest = require('supertest');
const should = require('chai').should();
expect = require('chai').expect;
const users = ('../../controllers/users.js');
api = supertest('http://localhost:3030');

describe('User', () => {
  it('returns a list of users', (done) => {
    api.get('/users')
      // .set('Accept', 'application/json')
      .expect(200)
    // .end((err, res, body) => {
    //   expect(res.body).to.equal(201);
    done();
  });
  // });
  it('it should get all users', (done) => {
    api.get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });

});

