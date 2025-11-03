// 전개연산자도 마찬가지로 iterable/iterator 프로토콜을 따른다.

const a = [1, 2];
// a[Symbol.iterator] = null; // null로 만들면
console.log([...a, ...[3, 4]]); // Error가 나온다

const set = new Set([1, 2, 3]);
const map = new Map([['a', 2]]);

console.log([...a, ...set, ...map.keys()]);


// Iterable에 대한 추상을 정확히 다루면
// Javascript에서 보다 이 값들을 잘 사용한 함수들을 만들고 값들을 잘 다룰 수 있다.
