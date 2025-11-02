import { go } from "../function/go.js";
import { pipe } from "../function/pipe.js";
import { curry } from "../function/curry.js";
import { reduce, map } from "../array/index.js";

const products = [
  {name: '사과', price: 10000, quantity: 1 },
  {name: '바나나', price: 20000, quantity: 2 },
  {name: '딸기', price: 3000, quantity: 3 },
  {name: '참외', price: 5000, quantity: 4 },
  {name: '수박', price: 15000, quantity: 5 },
  {name: '청포도', price: 13000, quantity: 6 },
];

const add = (a, b) => a + b;

const products_quantity_go = go(
  products,
  map(p => p.quantity), // 이것만 달라짐
  reduce(add)
);

const products_price_go = go(
  products,
  map(p => p.price),
  reduce(add)
);

const products_quantity_pipe = pipe(
  map(p => p.quantity),
  reduce(add)
);

const products_price_pipe = pipe(
  map(p => p.price),
  reduce(add)
);

console.log(products_quantity_go);
console.log(products_quantity_pipe(products));

// sum 함수로 추상화하기
const sum = (fn, iter) => go(
  iter,
  map(fn),
  reduce(add),
);

console.log(sum(p => p.price, products));
console.log(sum(p => p.quantity, products));
console.log(sum(p => p.price * p.quantity, products));

// sum에 커리를 씌우면
const curried_sum = curry((fn, iter) => go(
  iter,
  map(fn),
  reduce(add),
));

console.log(curried_sum(p => p.price)(products));
console.log(curried_sum(p => p.quantity)(products));
console.log(curried_sum(p => (p.price * p.quantity))(products));

const get_total_quantity = curried_sum(p => p.quantity);

console.log(get_total_quantity(products));