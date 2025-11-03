const nums = [1, 2, 3, 4, 5];

let total = 0;

for (const n of nums) {
  total += n;
}

console.log(total);

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
}

const add = (a, b) => a + b;

console.log(reduce(add, [1, 2, 3, 4, 5])); // 15

// const reduce = (acc, f, arr) => {

//     for (const n of arr) {
//         f(n);
//     }

//     return res;
// }