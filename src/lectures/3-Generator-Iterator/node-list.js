function map(fn, iter) {
    const res = [];
    for (const a of iter) {
        res.push(fn(a));
    }
    return res;
}

const elements = document.querySelectorAll('*');
console.log(elements[Symbol.iterator]()); // Array Iterator {}

console.log(map(el => el.nodeName, elements)); // (7) ['HTML', 'HEAD', 'META', 'META', 'TITLE', 'BODY', 'SCRIPT']

// elements.map(el => el.nodeName); // Uncaught TypeError: elements.map is not a function


function *gen() {
    yield 1;
    if (false) yield 2;
    yield 3;
}

console.log(map(val => val * val, gen())); // [1, 9]

let m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);

const newMap = new Map(map(([k, v]) => [k, v * v], m));
console.log(newMap);


const str = 'abc';
console.log(map(s => s + 'hi', str)); // ['ahi', 'bhi', 'chi']
