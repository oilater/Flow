/**
 * Map인지 여부를 확인
 * @param value - 검사할 값
 * @returns 값이 Map인지 여부를 반환
 */
export function isMap(value: unknown): value is Map<any, any> {
  return value instanceof Map;
}