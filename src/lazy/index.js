import { curry } from "../function/index.js";

export const L = {};

L.range = function *(l) {
  let i = -1;
  while (++i < l) {
    yield i;
  } 
}

L.map = curry(function *(f, iter) {
  iter = iter[Symbol.iterator]();
  let cur = -1;
    while(!(cur = iter.next()).done) {
      const a = cur.value;
      yield f(a);
    }
});

L.filter = curry(function *(f, iter) {
  iter = iter[Symbol.iterator]();
  let cur = -1;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) 
      yield a;
  }
});