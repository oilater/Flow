/**
 * Set인지 여부를 확인
 * @param value - 검사할 값
 * @returns 값이 Set인지 여부를 반환
 */
export function isSet(value: unknown): value is Set<any> {
  return value instanceof Set;
}