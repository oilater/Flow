// Generator
// 이터레이터이자 이터러블을 생성하는 함수

function* gen() {
    yield 1;
    yield 2;
    yield 3;

    return 100;
}

let iter = gen();
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 100, done: true } return 값이 전달됨

console.log(iter === iter[Symbol.iterator]()); // generator는 well formed iterator를 리턴하는 함수다

// yield를 통해 몇번의 next를 통해 값을 꺼낼 수 있을 지 정할 수 있다.


for (const a of gen()) {
    console.log(a); // 1 2 3    
}

// 순회할 값을 문장으로 표현하는 것이라고도 볼 수 있음
function* gen2() {
    yield 1;
    if (false) yield 2; // Ok, 건너 뜀
    yield 3;
}

// 자바스크립트에서는 이터러블이면 순회할 수 있다.
// 그런데, generator는 이런 문장을 값으로 만들 수 있고, 문장을 통해서 순회할 수 있는 값을 만들 수 있기 때문에
// 자바스크립트에서는 generator를 통해 프로그래머가 어떠한 값이나 상태든 사실상 순회할 수 있게 만들 수 있다는 것이다.
// 이점은 되게 상징적이고, 함수형 프로그래밍의 관점에서도 중요하다.
// 자바스크립트는 굉장히 다형성이 높다.
