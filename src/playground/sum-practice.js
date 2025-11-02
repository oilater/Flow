import { go } from "../function/go.js";
import { pipe } from "../function/pipe.js";
import { curry } from "../function/curry.js";
import { reduce, map, filter } from "../array/index.js";

const products = [
  {name: '사과', price: 1000, quantity: 1, is_selected: false },
  {name: '바나나', price: 2000, quantity: 2, is_selected: true },
  {name: '딸기', price: 3000, quantity: 3, is_selected: false },
];

const add = (a, b) => a + b;

const products_quantity_go = go(
  products,
  map(p => p.quantity), // 이것만 달라짐
  reduce(add)
);

const products_price_go = go(
  products,
  map(p => p.price),
  reduce(add)
);

const products_quantity_pipe = pipe(
  map(p => p.quantity),
  reduce(add)
);

const products_price_pipe = pipe(
  map(p => p.price),
  reduce(add)
);

console.log(products_quantity_go);
console.log(products_quantity_pipe(products));

// sum 함수로 추상화하기
const sum = (fn, iter) => go(
  iter,
  map(fn),
  reduce(add),
);

console.log(sum(p => p.price, products));
console.log(sum(p => p.quantity, products));
console.log(sum(p => p.price * p.quantity, products));

// sum에 커리를 씌우면
const curried_sum = curry((fn, iter) => go(
  iter,
  map(fn),
  reduce(add),
));

console.log(curried_sum(p => p.price)(products));
console.log(curried_sum(p => p.quantity)(products));
console.log(curried_sum(p => (p.price * p.quantity))(products));

const total_quantity = curried_sum(p => p.quantity);
const total_price = curried_sum(p => p.quantity * p.price);

console.log(total_quantity(products));

document.querySelector('#cart').innerHTML = `
  <table>
    <tr>
      <th>상품 이름</th>
      <th>가격</th>
      <th>수량</th>
      <th>총 가격</th>
    </tr>
    ${
      go(products,
        curried_sum(p => `
          <tr>
            <td><input type="checkbox" ${p.is_selected ? 'checked' : ''}></td>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td><input type="number" value=${p.quantity}></td>
            <td>${p.price * p.quantity}</td>
          </tr>
        `)
      )
    }
    <tr>
      <td colspan="3">합계</td>
      <td>${total_quantity(filter(p => p.is_selected, products))}</td>
      <td>${total_price(filter(p => p.is_selected, products))}</td>
    </tr>
  </table>
`;