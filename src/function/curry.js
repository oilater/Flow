// 함수의 실행 시점을 늦출 수 있게 하는 함수
export const curry = f => (a, ..._) => _.length ? f(a, ..._): (..._) => f(a, ..._);