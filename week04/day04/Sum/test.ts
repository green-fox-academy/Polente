'use strict'
import { test } from 'tape';
import { Sum } from './sum';

test('sums 2 values', t => {
    let myObject: Sum = new Sum();
    t.equal(myObject.add(2, 5), 7);
    t.end();
});