function *odds2() {
    yield 1;
    yield 3;
    yield 5;
    yield 7;
}

const iter2 = odds();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

// 이걸 자동화해보자

function *odds(l) {
    for (let i = 0; i < l; i++) {
        if (i % 2) yield i;
    }
}

const iter = odds(10);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


function *infinity(i = 0) {
    while(true) {
        yield i++;
    }
}

let iter3 = infinity();

iter3.next();
iter3.next();
iter3.next();
iter3.next(); 
// 무한히 생성 가능하지만 next의 값을 평가할 때까지만 동작하기 때문에 while(true)를 작성한다고 해서 브라우저가 멈추거나 하진 않는다.
// 이런 식으로 무한 수열을 작성할 수 있다.

function *odds3(l) {
    for (const a of infinity(1)) {
        if (a % 2) yield a;
        if (a === l) return;
    }
}

const iter4 = odds3(10);
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());

// 이번엔 limit을 만드는 제너레이터 만들어보자
// 이터러블을 받아서 계속 일을하다가 limit과 같은 값을 만나면 더이상 돌지 않게 함
function *limit(l, iter) {
    for (const a of iter) {
        yield a;
        if (a === l) return;
    }
}

const iter5 = limit(4, [1, 2, 3, 4, 5, 6]);

console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());


// 이부분도 다시 수정 가능
function *odds6(l) {
    for (const a of limit(l, infinity(1))) {
        if (a % 2) yield a;
        if (a === l) return;
    }
}

// 개 어렵다..
