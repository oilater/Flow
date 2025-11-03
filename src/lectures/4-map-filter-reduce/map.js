// 맵 함수를 구현 과정

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 120000},
    {name: '휴대폰 케이스', price: 10000},
    {name: '후드티', price: 50000},
    {name: '바지', price: 30000},
]

const productNames = products.map(p => p.name);
console.log(productNames); // [ '반팔티', '긴팔티', '휴대폰 케이스', '후드티', '바지' ]

const productPrices = products.map(p => p.price);
console.log(productPrices); // [ 15000, 120000, 10000, 50000, 30000 ]

// 맵 함수가 하는 일을 이런 로직으로 표현 가능
const names = [];
for (const product of products) {
    names.push(product.name);
}
console.log(names);

// 함수 안으로 옮겨볼까?
// function map() {
//     const names = [];
//     for (const product of products) {
//         names.push(product.name);
//     }
//     console.log(names);
// }

// function map(iter) {
//     const names = [];
//     for (const product of iter) {
//         names.push(iter.name);
//     }
//     return names;
// }

function map(fn, iter) {
    const res = [];
    for (const a of iter) {
        res.push(fn(a));
    }
    return res;
}

const arr = map(p => p.price, products);
console.log(arr);

Array.prototype.myMap = function(fn) {
    const res = [];
    for (const a of this) {
        res.push(fn(a));
    }
    return res;
}

const arr2 = products.myMap(p => p.price);

console.log(arr2, 'custom');


