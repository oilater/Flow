import { map } from "./map";
import { describe, it, expect } from "vitest";

describe("map", () => {
  describe("Array", () => {
    it("should return a new array with mapped values", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = map((x) => x * 2, arr);
      expect(result).toEqual([2, 4, 6, 8, 10]);
    });

    it("should handle empty array", () => {
      expect(map((x) => x * 2, [])).toEqual([]);
    });
  });

  describe("Set", () => {
    it("should return an array with mapped values from Set", () => {
      const set = new Set([1, 2, 3, 4, 5]);
      const result = map((x) => x * 2, set);
      expect(result).toEqual([2, 4, 6, 8, 10]);
    });

    it("should handle empty Set", () => {
      expect(map((x) => x * 2, new Set())).toEqual([]);
    });
  });

  describe("Map", () => {
    it("should return an array with mapped values from Map", () => {
      const mapObj = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
      const result = map(([, value]) => value * 2, mapObj);
      expect(result).toEqual([2, 4, 6]);
    });

    it("should handle empty Map", () => {
      expect(map((value) => value * 2, new Map())).toEqual([]);
    });
  });

  describe("string", () => {
    it("should return an array with mapped characters", () => {
      const result = map((char) => char.toUpperCase(), "hello");
      expect(result).toEqual(["H", "E", "L", "L", "O"]);
    });

    it("should handle empty string", () => {
      expect(map((char) => char.toUpperCase(), "")).toEqual([]);
    });
  });

  describe("ArrayLike", () => {
    it("should handle Array.from compatible objects", () => {
      const arrayLike = Array.from({ 0: "a", 1: "b", 2: "c", length: 3 });
      const result = map((value) => value.toUpperCase(), arrayLike);
      expect(result).toEqual(["A", "B", "C"]);
    });

    it("should handle arguments object-like structure", () => {
      const arrayLike = Array.from({ 0: 1, 1: 2, 2: 3, length: 3 });
      const result = map((value) => value * 2, arrayLike);
      expect(result).toEqual([2, 4, 6]);
    });
  });

  describe("Generator", () => {
    it("should handle generator functions", () => {
      function* generator() {
        yield 1;
        yield 2;
        yield 3;
      }
      const result = map((x) => x * 2, generator());
      expect(result).toEqual([2, 4, 6]);
    });
  });
});