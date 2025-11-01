import { go } from "../function/go.js";
import { reduce, filter, map } from "../array/index.js";

const fruits = [
  {name: '사과', price: 10000 },
  {name: '바나나', price: 20000 },
  {name: '딸기', price: 3000 },
  {name: '참외', price: 5000 },
  {name: '수박', price: 15000 },
  {name: '청포도', price: 13000 },
];

// curry를 적용해서 더 이상 값으로 평가되지 않고 다음 값을 기다림
const priceSumUnder10000 = go(
  fruits,
  map(fruit => fruit.price),
  filter(price => price < 10000),
  reduce((a, b) => a + b)
);

console.log(priceSumUnder10000);
