

const map = curry((fn, iterable) => {
  const res = [];
  for (const a of iterable) {
    res.push(fn(a));
  }
  return res;
});

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const filter = curry((fn, iterable) => {
  const res = [];
  for (const a of iterable) {
    if (fn(a)) res.push(a);
  }
  return res;
});

const reduce = curry((fn, acc, iterable) => {
  if (!iterable) {
    iterable = acc[Symbol.iterator]();
    acc = iterable.next().value;
  }
  for (const a of iterable) {
    acc = fn(acc, a);
  }
  return acc;
});

const go = (...args) => reduce((acc, f) => f(acc), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// 2만원 이하인 제품들의 가격을 더하는 함수 만들기

const add = (a, b) => a + b;
// [150000, 20000, ...]

products
  .map(p => p.price)
  .filter(p => p <= 20000)
  .reduce(add);

go(
  products,
  products => map(p => p.price)(products),
  products => filter(p => p <= 20000)(products),
  prices => reduce(add)(prices),
);

// curry:
// 함수를 받아서 함수를 리턴하는데, 반환한 함수가 실행되었을 때 인자가 2개 이상이라면 즉시 실행, 아니라면 다른 인자를 기다려서 받은 뒤 실행

const mult = curry((a, b) => a * b);

const mult3 = mult(3);
console.log(mult3(10)); // 30
console.log(mult3(5)); // 15
console.log(mult3(6)); // 18




go(
  products,
  products => map(p => p.price, products),
  products => filter(p => p <= 20000, products),
  prices => reduce(add, prices),
);

// 이제 map, filter, reduce를 curry로 감싸면 더 간단히 표현 가능
// 인자를 일단 하나만 받으면 이후 인자들을 받을 때 까지 기다리는 함수를 리턴하도록 할 수 있음

go(
  products,
  products => map(p => p.price)(products),
  products => filter(p => p <= 20000)(products),
  prices => reduce(add)(prices),
);

go(
  products,
  filter(p => p <= 20000),
  map(p => p.price),
  reduce(add),
);

// 중복 제거

const total_price = pipe(
  map(p => p.price),
  reduce(add),
);

const base_total_price = predi => pipe(
  filter(predi),
  total_price,
)

go(
  products,
  base_total_price(p => p.price >= 20000),
  console.log
);

go(
  products,
  base_total_price(p => p.price < 20000),
);

// 고차함수들을 함수의 조합으로 만들어가면서 잘게 나뉘어진 함수들을 계속해서 잘게 나누면서 중복 제거, 더 많은 곳에서 사용되도록 사용