import { curry } from "../function/curry.js";

/**
 * Array, Set, Map, string, ArrayLike 등의 Iterable에 callback 함수를 적용하여 단일 값으로 축약한다.
 * @param reducer - 누적값과 현재 값을 받아 새로운 누적값을 반환하는 함수
 * @param accumulator - 초기 누적값 또는 Iterable (iterable이 없으면 accumulator를 Iterable로 사용)
 * @param iterable - 반복할 Iterable (선택적)
 * @returns 축약된 단일 값
 *
 * @example
 * // 초기값이 있는 경우
 * reduce((acc, value) => acc + value, 0, [1, 2, 3, 4]); // => 10
 *
 * @example
 * // 초기값이 없는 경우
 * reduce((acc, value) => acc + value, [1, 2, 3, 4]); // => 10
 */
export const reduce = curry((
  reducer, 
  acc, 
  iterable
) => {
  if (!iterable) {
    iterable = acc[Symbol.iterator]();
    acc = iterable?.next().value;
  }

  for (const a of iterable) {
    acc = reducer(acc, a);
  }

  return acc;
});