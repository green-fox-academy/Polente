'use strict'

import { test } from 'tape';
import { Apple } from './apples'

test('getApple returns apple', t => {
    let myObject: Apple = new Apple();
    t.equal(myObject.getApple(), 'apple');
    t.equal(myObject.getApple(), 'pear');
    t.end();
});