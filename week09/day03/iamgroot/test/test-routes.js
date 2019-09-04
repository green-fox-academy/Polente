'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', t => {
  // TODO: implement it
  request(app)
    .get('/groot?message=somemessage')
    .set('Accept', 'application/json')
    .expect('content-type', 'application/json; charset=utf-8')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, { received: 'somemessage', translated: 'I am Groot!' });
      t.end();
    });
});
test('groot status fail', t => {
  // TODO: implement it
  request(app)
    .get('/groot')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 400);
      t.end();
    });
});
test('groot status fail', t => {
  // TODO: implement it
  request(app)
    .get('/groot?message=')
    .set('Accept', 'application/json')
    .expect('content-type', 'application/json; charset=utf-8')
    .end((err, resp) => {
      if (err) throw err;
      t.same(resp.body, { error: 'I am Groot!' });
      t.end();
    });
});
