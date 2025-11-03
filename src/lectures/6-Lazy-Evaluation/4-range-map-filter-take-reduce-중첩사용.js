import { curry } from "../../function/index.js";
import { L } from "../../lazy/index.js";

const go = (...args) => reduce((acc, fn) => fn(acc), args);

const range = l => {
  let i = -1;
  const res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
}

const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == l) 
      return res;
  }
});

const map = curry((
  mapper, 
  iterable
) => {
  const result = [];
  // 여기에는 사실 숨겨진 내용들이 많음
  iterable = iterable[Symbol.iterator]();
  let cur;
  while (!(cur = iterable.next()).done) {
    const a = cur.value;
    result.push(mapper(a));
  }

  return result;
});

const reduce = curry((
  reducer, 
  acc, 
  iterable
) => {
  if (!iterable) {
    iterable = acc[Symbol.iterator]();
    acc = iterable?.next().value;
  } else {
    iterable = iterable[Symbol.iterator]();
  }

  let cur;
  while (!(cur = iterable.next()).done) {
    const a = cur.value;
    acc = reducer(acc, a);
  }

  return acc;
});

const filter = curry((
  fn, 
  iterable
) => {
  const result = [];
  iterable = iterable[Symbol.iterator]();
  let cur;
  while (!(cur = iterable.next()).done) {
    const a = cur.value;
    if (fn(a)) {
      result.push(a);
    }
  }
  return result;
});

// Debugging
console.time('No L');
go(
  range(100000), 
  map(n => n + 10),
  filter(n => n % 2),
  take(2),
  console.log
);
console.timeEnd('No L');

console.time('L');
go(
  L.range(1000000), 
  L.map(n => n + 10),
  L.filter(n => n % 2),
  take(2),
  console.log
);
console.timeEnd('L');

/**
 * 결과는 같은데 두 코드가 동작하는 방식, 순서가 다르고,
 * 리턴되는 값들과 함수들이 어떤식으로 평가되는지 차이가 있음
 */

/**
 * 디버깅 해보면
 * L.range, L.map을 건너뛰고 take에 먼저 들어감
 * 둘다 실행은 했지만 어떤 연산도 하지 않고 바로 take 안쪽으로 간다
 * 
 * take의 iter에는 Generator가 들어옴
 * 
 * 근데 이어서 실행을 해보면 map으로 들어가는 게 아니라 L.filter로 들어간다?
 * L.range에서 안쪽의 코드를 평가하기를 미뤄둔 제너레이터가 바로 L.map으로 들어가게 되고,
 * L.map 역시도 바로 평가되기를 미뤄둔 이터레이터를 리턴하기 때문에 filter 역시도 이터레이터를 리턴해둔다
 * 즉 take에서 받는 건 filter가 미뤄둔 iterator이고, next를 했을 때 filter 함수 안쪽에서 평가가 시작되는 것이다.
 * 
 * 이렇게 쭉 yield로 계속 다시 타고 올라가면서 filter에서 조건에 안맞으면 다시 take -> L.range -> L.map -> L.filter 순으로 반복된다.
 */

/**
 * 이전에는 range로 먼저 배열을 다 만들었고, map을 하면서 10개 배열에 모두 10을 더하고 filter한 값을 만들어서
 * 그 값이 take에 들어갔는데,
 * 
 * 이렇게 제너레이터 이터레이터 방식으로 만들어진 이 함수들을 통해서 take에서 next를 했을 때 왼쪽에서부터 오른쪽으로 0,1 ,2 ,3 ,4 5...10
 * 0+ 10, 1 + 10, 2 + 10, ..., filter로 확인하고 가는게 아니라
 * 순서가 반대로 take를 하고자 했더니 반대로 위로 올라가면서 내가 filter 할걸 줘, map할 값을 줘, range에서 0을 주고
 * 0이 map을 받아서 10을 더한 함수를 적용하고, filter가 받고, take가 받고 
 * 이렇게 가로로 진행되는 게 아니라 세로 순서로 진행이 된다.
 * 
 * Q. 근데 차이가 있나? 시간 복잡도는 똑같지 않나?
 * 
 * 하지만 1이 들어왔을 때 yield를 처음으로 했기 때문에, 그 전 값은 take에서 확인조차 하지 않았다.
 * 과정이 더 효율적임
 */

/**
 * 효율성 테스트
 * L은 다 확인을 하지 않는다.
 * 
 * 만약 filter에서 값이 걸러졌으면, take의 next가 실행이 안된 것
 * map과 filter만 왔다갔다 하면서 효율적으로 진행할 수 있다.
 * 
 * range가 10000이라고 가정하면?
 * L이 없는 코드는 다 돌아야 할텐데
 * 특히 take()를 적용하면 앞의 배열을 다 돌 필요 없이 조금만 돌다가 끝나게 된다.
 * 세로로 진행하는 장점이다,,
 * 
[ 11, 13 ]
No L: 24.928ms

[ 11, 13 ]
L: 0.187ms
 */

