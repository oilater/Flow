// // Array를 통해 알아보기 
// const arr = [1, 2, 3];
// for (const a of arr) console.log(a);

// // Set을 통해 알아보기
// const set = new Set([1, , 3]);
// for (const a of set) console.log(a);

// // Map을 통해 알아보기
// const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// for (const a of map) console.log(a);

// // Set, Map은 숫자 키로 접근할 수 없다
// // for of 문이 내부적으로 이렇게 접근하지 않는다는 것을 알 수 있다.

// // 근데 const of 로 동일하게 다 출력 가능함
// // 어떻게 for of 문으로 추상화되었을까?
// // for of는 어떤 규약을 통해 동작할까?

// // Symbol.iterator라는 심볼이 있다.
// // ES6에서 추가된 타입
// // Symbol은 객체의 키로 사용가능

// console.log(arr[Symbol.iterator]); // [Function: values]
// // 어떤 함수가 들어가 있네

// // 한번 지워보고 다시 돌려보자
// // arr[Symbol.iterator] == null;
// // for (const a of arr) console.log(a);

// // arr is not iterable 이라는 에러가 발생

// // => for of 와 Symbol.iterator에 담긴 함수가 연관이 있다
// console.log(set[Symbol.iterator]); // [Function: values]
// console.log(map[Symbol.iterator]); // [Function: values]


// // Iterable, Iterator 프로토콜 살펴보기

// // Array, Set, Map은 JS 내장객체로서 Iterator/Iterable 프로토콜을 따르고 있다.
// // 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
// // 즉 arr은 이터러블이라고 할 수 있음

// // 확인해보자
// const iterator = arr[Symbol.iterator]();
// console.log(iterator); // Object [Array Iterator] {}
// // Array의 Symbol.iterator 프로퍼티(함수)를 실행하면 Iterator가 반환된다.

// // 그럼 이터레이터는 뭘까?
// // 이터레이터: { value, done } 객체를 리턴하는 next()라는 메서드를 가진 값

// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());

// /**
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
//  */

// // 이터러블/이터레이터 프로토콜: 이러한 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 한 규약

// /**
// for of 문 같은 경우
// Array가 이터러블이고 Array는 Symbol.iterator를 통해 이터레이터를 리턴하기 때문에
// for of 문과 함께 동작하는 이터러블 객체고,
// 그렇게 for of 문을 순회하기 때문에 iterable/iterator 프로토콜을 따른다고 할 수 있다.
//  */

// // value에 들어오는 값을 a에 담아서 출력하다가 done이 true가 되면 for 문에서 빠져나오도록 되어있다.


// const a = set[Symbol.iterator]();
// a.next(); // Ok
// a.next(); // Ok

// // Map은 value에 Array ['a', 1] 가 담기는 것을 확인할 수 있다.

// // map은 keys()라는 함수가 있다.
// // keys()는 iterator를 리턴한다. 
// // next를 했을 때 value에 키만 담는다.

// // 따라서 이런 식으로 key 값만 뽑을 수도 있다.
// for (const a of map.keys()) console.log(a);
// // value만 뽑을 수도 있다.
// for (const a of map.values()) console.log(a);
// // [key, value]를 뽑을 수 있다.
// for (const a of map.entries()) console.log(a);

// // map.values()의 리턴 값은 iterator인데 여기서 다시 Symbol.iterator로 접근해보면

// var iter = map.values()[Symbol.iterator]();
// // 또 Symbol.iterator를 가지고 있다.
// console.log(iter); // [Map Iterator] { 1, 2, 3 }

// // entries의 결과를 Symbol.iterator를 실행한 것을 가지고 다시 순회를 하는 것이다.
// console.log(iter.next()); // 자기 자신이 그대로 뽑힘
// console.log(iter.next()); // 자기 자신이 그대로 뽑힘
// console.log(iter.next()); // 자기 자신이 그대로 뽑힘
// console.log(iter.next()); // 자기 자신이 그대로 뽑힘

// /**
// [Map Iterator] { 1, 2, 3 }

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
//  */

const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

const mapValues = map.values();
console.log(mapValues); // [Map Iterator] { 1, 2, 3 }
console.log(mapValues[Symbol.iterator]()); // [Map Iterator] { 1, 2, 3 }
console.log(mapValues[Symbol.iterator]()[Symbol.iterator]()); // [Map Iterator] { 1, 2, 3 }