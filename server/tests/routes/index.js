const supertest = require('supertest');
// const chaiHttp = require('chai-http');
// const chai = require('chai');
const should = require('chai').should();
expect = require('chai').expect;
const users = ('../../controllers/users.js');
api = supertest('http://localhost:3030');

// chai.use(chaiHttp);

describe('User', () => {
  it('returns a list of users', (done) => {
      api.get('/users')
      // .end((err, res) => {
      //   res.body.should.be.a('array')
      //   expect(res.body).to.have.property('username');
        expect(200)
        done();
      });
  });

