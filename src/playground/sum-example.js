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

const sum = curry((f, iter) => go(
  iter,
  map(f),
  reduce(add)
));

 console.log(sum(p => p.quantity, products));
 

console.log(sum(p => p.quantity, products)); 
console.log(sum(p => p.price * p.quantity, products)); 

// 총 수량
const go_total_quantity = products => go(
  products,
  map(p => p.quantity),
  reduce((a, b) => a + b)
)

const total_quantity = pipe(
  map(p => p.quantity),
  reduce(add)
);

console.log(total_quantity(products));
// quantity + prices 전체 합산 금액

const total_price = pipe(
  map(p => p.price * p.quantity),
  reduce(add),
)

console.log(total_price(products));

const sum_quantity = products => sum(p => p.quantity)(products);
const sum_price = products => sum(p => p.price)(products);

// 이 말은
const sum_quantity2 = sum(p => p.quantity);
const sum_price2 = sum(p => p.price);

console.log(sum_quantity2(products));
console.log(sum_price2(products));