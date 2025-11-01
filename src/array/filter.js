/**
 * Array, Set, Map, string, ArrayLike 등의 Iterable에 predicate 함수를 적용하여 조건을 만족하는 요소들만 새로운 배열로 반환한다.
 * @param callback - 각 요소에 적용할 조건 함수
 * @param iterable - 반복할 Iterable (Array, Set, Map, string, ArrayLike ...)
 * @returns 조건을 만족하는 요소들의 배열
 * 
 * @example
 * // 배열에서 짝수만 필터링
 * filter((x) => x % 2 === 0, [1, 2, 3, 4, 5]); // => [2, 4]
 * 
 * @example
 * // Set에서 3보다 큰 수만 필터링
 * filter((x) => x > 3, new Set([1, 2, 3, 4, 5])); // => [4, 5]
 * 
 * @example
 * // Map에서 값이 1보다 큰 키-값 쌍만 필터링
 * filter(([, value]) => value > 1, new Map([["a", 1], ["b", 2], ["c", 3]])); // => [["b", 2], ["c", 3]]
 * 
 * @example
 * // 문자열에서 모음만 필터링
 * filter((char) => ["a", "e", "i", "o", "u"].includes(char), "hello"); // => ["e", "o"]
 */
export const filter =(
  callback, 
  iterable
) => {
  const result = [];
  for (const value of iterable) {
    if (callback(value)) {
      result.push(value);
    }
  }
  return result;
};