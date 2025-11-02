import { take } from "../function/take.js";
import { range,  L } from "../function/range.js";
import { go } from "../function/go.js";
import { reduce } from "../array/reduce.js";

const add = (a, b) => a + b;

// 길이 100인 배열을 만들어놓고 5개를 만듦
// console.log(take(5, range(100)));
go(
  L.range(1000),
  take(5),
  reduce(add),
  console.log
);
// 길이 100을 한도로 5개의 배열만 만듦
// console.log(take(5, L.range(100)));

