import { reduce } from "./reduce";
import { describe, it, expect } from "vitest";

describe("reduce", () => {
  describe("Array", () => {
    it("should reduce with initial value", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = reduce((acc, value) => acc + value, 0, arr);
      expect(result).toBe(15);
    });

    it("should reduce without initial value", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = reduce((acc, value) => acc + value, arr);
      expect(result).toBe(15);
    });

    it("should handle empty array with initial value", () => {
      const result = reduce((acc, value) => acc + value, 10, []);
      expect(result).toBe(10);
    });
  });

  describe("Set", () => {
    it("should reduce with initial value", () => {
      const set = new Set([1, 2, 3, 4, 5]);
      const result = reduce((acc, value) => acc + value, 0, set);
      expect(result).toBe(15);
    });

    it("should reduce without initial value", () => {
      const set = new Set([1, 2, 3, 4, 5]);
      const result = reduce((acc, value) => acc + value, set);
      expect(result).toBe(15);
    });
  });

  describe("Map", () => {
    it("should reduce with initial value", () => {
      const mapObj = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
      const result = reduce((acc, [, value]) => acc + value, 0, mapObj);
      expect(result).toBe(6);
    });

    it("should reduce without initial value", () => {
      const mapObj = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);

      const result = reduce((acc, [, value]) => (Array.isArray(acc) ? acc[1] : acc) + value, mapObj);
      expect(result).toBe(6);
    });
  });

  describe("string", () => {
    it("should reduce with initial value", () => {
      const result = reduce((acc, char) => acc + char.toUpperCase(), "", "hello");
      expect(result).toBe("HELLO");
    });

    it("should reduce without initial value", () => {
      const result = reduce((acc, char) => acc + char, "hello");
      expect(result).toBe("hello");
    });
  });

  describe("Generator", () => {
    it("should reduce with initial value", () => {
      function* generator() {
        yield 1;
        yield 2;
        yield 3;
      }
      const result = reduce((acc, value) => acc + value, 0, generator());
      expect(result).toBe(6);
    });

    it("should reduce without initial value", () => {
      function* generator() {
        yield 1;
        yield 2;
        yield 3;
      }
      const result = reduce((acc, value) => acc + value, generator());
      expect(result).toBe(6);
    });
  });

  describe("edge cases", () => {
    it("should return initial value for empty array", () => {
      const result = reduce((acc, value) => acc + value, 100, []);
      expect(result).toBe(100);
    });

    it("should work with multiplication", () => {
      const arr = [1, 2, 3, 4];
      const result = reduce((acc, value) => acc * value, 1, arr);
      expect(result).toBe(24);
    });

    it("should work with array building", () => {
      const arr = [1, 2, 3];
      const result = reduce((acc, value) => [...acc, value * 2], [], arr);
      expect(result).toEqual([2, 4, 6]);
    });
  });
});

