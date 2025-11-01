import { go } from "./go.js"

/**
 * 함수를 리턴하는 함수다.
 * go 함수는 즉시 어떤 값을 평가하는 데 사용된다면, pipe는 함수들이 나열되어 있는 합성된 함수를 만든다
 * 
 * @param fs - 순차적으로 실행할 함수들
 * @returns 합성된 함수
 * 
 * @example
 * pipe(
 *  (a, b) => a + b,
 *  a => a + 1,
 *  a => a + 10,
 *  a => a + 100,
 * )(0, 0, 1); // 112
 */
export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);