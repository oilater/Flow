const map = (fn, iterable) => {
  const res = [];
  for (const a of iterable) {
    res.push(fn(a));
  }
  return res;
}

const filter = (fn, iterable) => {
  const res = [];
  for (const a of iterable) {
    if (fn(a)) res.push(a);
  }
  return res;
}

const reduce = (fn, acc, iterable) => {
  if (!iterable) {
    iterable = acc[Symbol.iterator]();
    acc = iterable.next().value;
  }
  for (const a of iterable) {
    acc = fn(acc, a);
  }
  return acc;
}


const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// pipe: 함수를 리턴하는 함수

// go 함수는 즉시 어떤 값을 평가하는 데 사용된다면,
// pipe는 함수들이 나열되어 있는 합성된 함수를 만든다
const add = (a, b) => a + b;
const go = (...args) => reduce((a, fn) => fn(a), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)

const f = pipe(
  add,
  a => a + 10,
  a => a + 100,
);



console.log(f(1, 2));