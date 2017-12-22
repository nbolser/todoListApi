'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chair-http'));

const app = require(../server.js);

describe('API endpoint /tasks', function() {
  before(function() {

  });
  after(function() {

  });

  it('returns all tasks', function() {
    return chai.request(app)
      .get('/tasks')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  } );
});
