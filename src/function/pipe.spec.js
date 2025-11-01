import { describe, it, expect } from "vitest";
import { pipe } from "./pipe";

describe('pipe', () => {
  it('should return function', () => {
    const add111 = pipe(
      (a, b, c) => a + b + c,
      a => a + 1,
      a => a + 10,
      a => a + 100,
    );

    expect(add111).toBeTypeOf("function");
    expect(add111(0, 0, 1)).toEqual(112);
    expect(add111(2, 1, 0)).toEqual(114);
  });
});