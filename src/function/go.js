import { reduce } from "../array/index.js";

/**
 * 인수로 받은 함수들을 순차적으로 실행하고 마지막 함수의 결과를 반환한다.
 * @param {...any} args - 순차적으로 실행할 함수들
 * @returns 마지막 함수의 결과
 * 
 * @example
 * go(
 *  0, 
 *  (a) => a + 1,
 *  (a) => a + 10,
 *  (a) => a + 100,
 * ); // 111
 */
export const go = (...args) => reduce((acc, fn) => fn(acc), args);