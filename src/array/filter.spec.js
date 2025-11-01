import { filter } from "./filter";
import { describe, it, expect } from "vitest";

describe("filter", () => {
  describe("Array", () => {
    it("should return a new array with filtered values", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = filter((x) => x > 2, arr);
      expect(result).toEqual([3, 4, 5]);
    });

    it("should handle empty array", () => {
      expect(filter((x) => x > 2, [])).toEqual([]);
    });

    it("should return empty array when no elements match", () => {
      const arr = [1, 2, 3];
      const result = filter((x) => x > 10, arr);
      expect(result).toEqual([]);
    });
  });

  describe("Set", () => {
    it("should return an array with filtered values from Set", () => {
      const set = new Set([1, 2, 3, 4, 5]);
      const result = filter((x) => x % 2 === 0, set);
      expect(result).toEqual([2, 4]);
    });

    it("should handle empty Set", () => {
      expect(filter((x) => x > 2, new Set())).toEqual([]);
    });
  });

  describe("Map", () => {
    it("should return an array with filtered values from Map", () => {
      const mapObj = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
      const result = filter(([, value]) => value > 1, mapObj);
      expect(result).toEqual([
        ["b", 2],
        ["c", 3],
      ]);
    });

    it("should handle empty Map", () => {
      expect(filter((value) => value > 1, new Map())).toEqual([]);
    });
  });

  describe("string", () => {
    it("should return an array with filtered characters", () => {
      const result = filter((char) => char === "l" || char === "o", "hello");
      expect(result).toEqual(["l", "l", "o"]);
    });

    it("should handle empty string", () => {
      expect(filter((char) => char === "a", "")).toEqual([]);
    });
  });

  describe("Generator", () => {
    it("should handle generator functions", () => {
      function* generator() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
      }
      const result = filter((x) => x > 3, generator());
      expect(result).toEqual([4, 5]);
    });
  });
});

