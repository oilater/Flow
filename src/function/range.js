import { reduce } from "../array/reduce.js";

export const range = l => {
  let i = -1;
  const res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
}

const add = (a, b) => a + b;

// console.log(range(5)); // [0, 1, 2, 3, 4]
// console.log(range(2)); // [0, 1]


const list = range(4);
// console.log(list);
// console.log(reduce(add, list)); // 6

// 느긋한 L.range
export const L = {};

L.range = function *(l) {
  let i = -1;
  while (++i < l) {
    yield i;
  } 
}

const list2 = L.range(4);
// console.log(list2); // Object [Generator] {} => Iterator
// console.log(reduce(add, list)); // 6

// 배열, Generator 둘다 이터러블이라 reduce에 적용 가능

// L.range, range의 차이?

// range는 실행했을 때 즉시 배열로 평가가 되어 담김
// L.range는 약간 다름
// while 안에서 i를 콘솔에 찍어보자
// range에 있는 console.log 찍힘
// L.range는 while 밖에 로그를 찍어도 어떤 것도 실행되지 않음
// 그럼 언제 처음 저 부분들이 평가가 되지?

// console.log(list2.next()); // 이 next()를 찍어야 평가가 됨
// console.log(list2.next()); // 이 next()를 찍어야 평가가 됨
// console.log(list2.next()); // 이 next()를 찍어야 평가가 됨
// console.log(list2.next()); // 이 next()를 찍어야 평가가 됨
// console.log(list2.next()); // 이 next()를 찍어야 평가가 됨
// 근데 왜 reduce에는 안찍히지?

// arr [1, 2, 3] 이라는 배열이 있다면, 이 값을 사용할 때에서야 필요하다
// arr 만으로는 아직 필요한 값이 아니라는 것! 아직 배열 형태가 아니어도 됨

// 즉, 두 코드의 차이는 
// range는 Array를 다 만든 다음에 배열로 전달이 되어 동작,
// L.range는 Array를 만들지 않고, 하나씩 값을 꺼내기만 하는 것

// 사실 그냥 range는 과정이 하나 더 있는데
// for ... of 에서 Iterator를 한번 더 만드는 과정이 있는 것
// L.range가 조금 더 효율적이라고 볼 수 있다

// 그럼 얼마나 효율적인지 성능 테스트 해보자
function test(name, time, f) {
  console.time(name);
  while (time--) {
    f();
  }
  console.timeEnd(name);
}

// test('range', 10, () => reduce(add, range(1000000)));
// test('L.range', 10, () => reduce(add, L.range(1000000)));
// range: 512.112ms
// L.range: 248.449ms