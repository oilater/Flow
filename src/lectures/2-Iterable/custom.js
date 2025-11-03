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
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());