/**
 * Array, Set, Map, string, ArrayLike 등의 Iterable에 predicate 함수를 적용하여 조건을 만족하는 요소들만 새로운 배열로 반환한다.
 * @param callback - 각 요소에 적용할 조건 함수
 * @param iterable - 반복할 Iterable (Array, Set, Map, string, ArrayLike ...)
 * @returns 조건을 만족하는 요소들의 배열
 */
export function filter(
  callback,
  iterable
) {
  const result = [];
  for (const value of iterable) {
    if (callback(value)) {
      result.push(value);
    }
  }
  return result;
}