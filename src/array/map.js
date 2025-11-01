/**
 * Array, Set, Map, string, ArrayLike 등의 Iterable에 callback 함수를 적용한 새로운 배열을 반환한다.
 * @param iterable - 반복할 Iterable (Array, Set, Map, string, ArrayLike ...)
 * @param callback - 각 요소에 적용할 함수
 * @returns callback 함수를 적용한 배열
 */
export function map(
  callback,
  iterable,
) {
  const result = [];
  for (const value of iterable) {
    result.push(callback(value));
  }
  return result;
}