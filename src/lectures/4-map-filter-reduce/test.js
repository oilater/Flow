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

// console.log(reduce(
//   add,
//   filter(n => n.price < 20000,
//     map(p => p.price, products)
//   )));

const nums = [1, 2, 3, 4, 5];