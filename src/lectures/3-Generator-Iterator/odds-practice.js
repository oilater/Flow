// function *odds() {
//     yield 1;
//     yield 3;
//     yield 5;
// }

// const iter = odds();

// function *betterOdds(limit) {
//     for (let i = 0; i < limit; i++) {
//         if (i % 2) yield i;
//     }
// }

// const betterIter = betterOdds(5);

// console.log(betterIter.next());
// console.log(betterIter.next());
// console.log(betterIter.next());

// // 
function *inifinity(start) {
    while (true) {
        yield start++;
    }
}

// const inifinityIter = inifinity(0);

// console.log(inifinityIter.next());
// console.log(inifinityIter.next());
// console.log(inifinityIter.next());
// console.log(inifinityIter.next());
// console.log(inifinityIter.next());
// console.log(inifinityIter.next());

// function *newOdds(limit) {
//     for (const a of inifinity(0)) {
//         if (a % 2) yield a;
//         if (a === limit) return;
//     }
// }

// const newIter = newOdds(10);
// console.log(newIter.next());
// console.log(newIter.next());
// console.log(newIter.next());
// console.log(newIter.next());
// console.log(newIter.next());
// console.log(newIter.next());

function *limit(l, iter) {
    for (const a of iter) {
        yield a;
        if (a ===l) return;
    }
}

const limitIter = limit(5, [1, 2, 3, 4, 5]);

console.log(limitIter.next());
console.log(limitIter.next());
console.log(limitIter.next());
console.log(limitIter.next());
console.log(limitIter.next());
console.log(limitIter.next());

function *myOdds(l) {
    yield* limit(l, inifinity(0));
}

const myIter = myOdds(5);
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());

// // for of 전개 연산자, 구조분해, 나머지 연산자와 함께 사용될 수 있다.

// console.log(...odds());
// console.log(...myOdds(5));
// console.log([...myOdds(5), ...odds()]);

// const [head, ...tail] = myOdds(10);
// console.log(head, tail);

