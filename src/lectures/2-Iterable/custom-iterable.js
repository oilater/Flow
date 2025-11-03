// 사용자 정의 이터러블 정의

const iterable = {
    // 이터러블 값은 [Symbol.iterator] 메서드를 구현하고 있어야 한다.
    [Symbol.iterator]() {
        let i = 3;

        // 이터레이터를 반환해야 한다.
        return {
            next() {
                return i == 0 ? {done: true} : {value: i--, done: false};
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const a of iterable) console.log(a);


const arr2 = [1, 2, 3];
const iter2 = arr2[Symbol.iterator]();
iter2.next(); // 건너 뛸 수도 있음
for (const a of iter2) console.log(a);


// iterator가 자기 자신을 반환하는 Symbol.iterator 메서드를 가지고 있을 때 Well-formed iterator, Well-formed iterable이라고 할 수 있다.
console.log(iter2 === iter2[Symbol.iterator]()); // true

// ES6 이상인 경우 뿐만 아니라 Web API에서 제공하는 DOM 같은 경우도 Iterator/Iterable 프로토콜을 따르고 있다.

const all = document.querySelectorAll('*');
for (const a of all) console.log(a); // Ok

// all 이라는 값은 배열이어서가 아니라, nodeList이고, Symbol.iterator가 구현이 되어 있기 때문이다.

// 자바스크립트에서 새롭게 바뀐 순회, 이터러블/이터레이터 프로토콜은 굉장히 중요하다.

// 궁금증:  Symbol.iterator 메서드는 왜 this를 반환할까?