'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Everything works with the given parameters', t => {
  request(app)
    .get('/yondu?distance=0&time=10')
    .set('Accept', 'application/json')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, { distance: '0', time: '10', speed: 0 });
      t.end();
    });
});

test('Send 400 if no query', t => {
  request(app)
    .get('/yondu?')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 400);
      t.end();
    });
});
