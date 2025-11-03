// ES6에서 리스트 순회가 많이 바뀌었다

// 기존 ES5
const list = [1, 2, 3];

// length 프로퍼티에 의존, 숫자 키로 순회하도록 i를 증가시킴
for (var i = 0; i < list.length; i++) {
    console.log(list[i]); // 1 2 3 
}

// 유사배열 역시 동일한 방법
const str = 'abc';
for (var i = 0; i < str.length; i++) {
    console.log(str[i]); // a b c
}

// ES6
// 간결, 보다 선언적
for (const a of list) {
    console.log(a); // 1 2 3 
}

for (const a of str) {
    console.log(a);
}