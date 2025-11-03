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

const add = (a, b) => a + b;
console.log(
  reduce(
    add,
    map(p => p.price,
      filter(p => p.price < 20000, products
      )
    )
  )
);

// go의 매개변수는 (target, fn) 형태로,
// target에 대해 fn을 적용하고, 이 반환값에 또 fn을 적용해나가는 형태
// reduce의 형태와 같다.

//fn, iterable
// 어떻게 저 값을 이용할건데 ?
// fn에 해당
const go = (...args) => reduce((a, fn) => fn(a), args);
// 1. args를 하나씩 돈다
// 나오는건 함수겠지
// 이 함수를 적용해야 하는데

// [0, a => a + 1, a => a + 10, a => a + 100]
// go 사용 예시
go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  console.log
);

// 111


console.log(products.reduce((acc, cur) => acc + cur.price, 0));