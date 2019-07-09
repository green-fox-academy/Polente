"use strict";

function factorio(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorio(x - 1);
}
console.log(factorio(10));
