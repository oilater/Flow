/**
 * Array, Set, Map, string, ArrayLike 등의 Iterable에 callback 함수를 적용한 새로운 배열을 반환한다.
 * @param mapper - 각 요소에 적용할 함수
 * @param iterable - 반복할 Iterable (Array, Set, Map, string, ArrayLike ...)
 * @returns callback 함수를 적용한 배열
 * 
 * @example
 * // 배열에서 각 요소를 2배로 매핑
 * map((x) => x * 2, [1, 2, 3, 4, 5]); // => [2, 4, 6, 8, 10]
 * 
 * @example
 * // Set에서 각 요소를 2배로 매핑
 * map((x) => x * 2, new Set([1, 2, 3, 4, 5])); // => [2, 4, 6, 8, 10]
 * 
 * @example
 * // Map에서 각 값을 2배로 매핑
 * map(([, value]) => value * 2, new Map([["a", 1], ["b", 2], ["c", 3]])); // => [2, 4, 6]
 * 
 * @example
 * // 문자열에서 각 문자를 대문자로 매핑
 * map((char) => char.toUpperCase(), "hello"); // => ["H", "E", "L", "L", "O"]
 */
export const map =(
  mapper, 
  iterable
) => {
  const result = [];
  for (const value of iterable) {
    result.push(mapper(value));
  }
  return result;
}