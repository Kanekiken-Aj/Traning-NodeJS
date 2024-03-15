
// const request = require('supertest');
// const app = require('../app'); // Assuming your app file is in the same directory

// describe('GET /', () => {
//   it('responds with json', (done) => {
//     request(app)
//       .get('/')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end((err, res) => {
//         if (err) return done(err);
//         // You can add more assertions here if needed
//         done();
//       });
//   });
// });

// test/app.test.js



// const request = require('supertest');
// const app = require('../app');

// describe('GET /', () => {
//   it('responds with Hello, World!', (done) => {
//     request(app)
//       .get('/')
//       .expect('Content-Type', /text\/html/)
//       .expect(200)
//       .expect('Hello, World!')
//       .end((err, res) => {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

// mocha testing framework and chai is testing library that is used with mocha

import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js'; // Update the path according to your file structure

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
  it('should return a welcome message', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Hello, World!');
        done();
      });
  });
});

