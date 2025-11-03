/**
 * 지연성을 가진 L.map을 구현해보자
 * 제너레이터/이터레이터 프로토콜을 기반으로 구현해보는 L-map
 * 
 * 평가를 미루는 성질을 가지고 평가 순서를 달리 조작할 수 있는 준비가 되어 있는 이터레이터를 반환하는 제너레이터 함수
 */

const L = {};
L.map = function *(f, iter) {
  for (const a of iter) yield f(a);
}
// 새로운 array를 만들지 않고 yield를 통해 하나씩 전달
// 준비가 되어 있는 iterator 객체를 원하는 방식으로 평가한다

var it = L.map(a => a + 10, [1, 2, 3]);
console.log([...it]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
