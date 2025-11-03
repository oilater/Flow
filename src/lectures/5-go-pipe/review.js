// const flow = (acc, ...f) => {
//     for (const a of f) {
//         acc = a(acc);
//     }
//     return acc;
// }

// // reduce를 생각해보자
// [1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0);

// callbackFn, initialValue
// initialValue에 대해 callbackFn을 계속 실행해나서 최종값 반환
// 근데 reduce는 Array.prototype에 정의된 메서드라서 커스텀 reduce 만들어야 함

// const reduce = (acc, ...callbacks) => {
//     for (const callback of callbacks) {
//         acc = callback(acc);
//     }
//     return acc;
// }

// const flow = (initialValue, ...args) => reduce(initialValue, ...args);
// console.log(flow(
//     0,
//     a => a + 1,
//     a => a + 10,
//     a => a + 100
// )); // 111
const arr = [1, 2, 3, 4, 5];
let total = 0;

const products = [
  { name: '반팔티', price: 15000 },
  { name: '흰 티', price: 20000 },
  { name: '청바지', price: 45000 },
  { name: '긴옷', price: 4000 },
  { name: '나시', price: 30000 },
]

const addPrice = (total, product) => total + product.price;
// console.log(reduce(addPrice, 0, products));

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc;
}

const go = (...args) => reduce((acc, f) => f(acc), args);

console.log(go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
)); // 111

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const a = pipe(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100,
);

console.log(a(0, 1)); // 111