// 고차 함수: 함수를 값으로 다루는 함수

// 함수를 매개변수로 받아서 사용
const apply1 = f => f(1);
const add2 = a => a + 2;
console.log(apply1(add2)); // 
// (a => a + 2) => (a => a + 2)(1) 이런 셈

console.log(apply1(a => a - 1)); // 0

// apply1은 고차함수

const times = (f, n) => {
    let i = -1;

    while(++i < n) f(i);
};

times(console.log, 3);
times(a => console.log(a + 10), 3);

// applicative Programming 이라고도 한다

const addMaker = a => b => a + b; // 클로저를 만들어 리턴

const add10 = addMaker(10);
console.log(add10(5));
console.log(add10(10));
