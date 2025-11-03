// map, filter, reduce  구현 복습
const nums = [1, 2, 3, 4, 5];

// map - for 문
const arr = [];

for (const num of nums) {
    arr.push(num.toString());
}

console.log(arr);

// map
const map = (fn, iterable) => {
    const res = [];
    for (const a of iterable) {
        res.push(fn(a));
    }
    return res;
}

console.log(map(a => a.toString(), function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}()));

// filter - for 문
const arr2 = [1, 2, 3, 4, 5];
const ans2 = [];

for (const a of arr2) {
    if (a % 2 === 0) {
        ans2.push(a);
    }
}
console.log(ans2);

// filter
const filter = (fn, iterable) => {
    const res = [];
    for (const a of iterable) {
        if (fn(a)) res.push(a);
    }
    return res;
}

console.log(filter(a => a % 2 === 0, [1, 2, 3, 4, 5]));

const arr3 = [1, 2, 3, 4, 5];
let ans3 = 0;

for (const a of arr3) {
    ans3 += a;
}

console.log(ans3);

const reduce = (fn, acc, iterable) => {
    for (const a of iterable) {
        acc = fn(acc, a);
    }
    return acc;
}

const add = (a, b) => a + b;
reduce(add, 0, [1, 2, 3, 4, 5]);