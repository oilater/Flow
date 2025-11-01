/**
 * ArrayLike인지 여부를 확인
 * @param value - 검사할 값
 * @returns 값이 ArrayLike인지 여부를 반환
 */
export function isArrayLike(value?: any): boolean {
  return value !== null
    && typeof value !== 'function'
    && typeof value?.length === 'number'
    && value?.length >= 0;
}