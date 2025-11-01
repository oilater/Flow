import { describe, it, expect } from "vitest";
import { go } from "./go";
import { filter, map, reduce } from "../array";

describe('go', () => {
  it('should return accurate value', () => {
    const value = go(
      0,
      a => a + 1,
      a => a + 10,
      a => a + 100,
    );

    expect(value).toEqual(111);
  });

  it('should return accurate value', () => {
    const fruits = [
      {name: '사과', price: 10000 },
      {name: '바나나', price: 20000 },
      {name: '딸기', price: 3000 },
      {name: '참외', price: 5000 },
      {name: '수박', price: 15000 },
      {name: '청포도', price: 13000 },
    ];

    const priceSumUnder10000 = go(
      fruits,
      fruits => filter(fruit => fruit.price < 10000, fruits),
      fruits => map(fruit => fruit.price, fruits),
      prices => reduce((a, b) => a + b, prices),
    );

    expect(priceSumUnder10000).toEqual(8000);
  });

    it('should return accurate value', () => {
    const fruits = [
      {name: '사과', price: 10000 },
      {name: '바나나', price: 20000 },
      {name: '딸기', price: 3000 },
      {name: '참외', price: 5000 },
      {name: '수박', price: 15000 },
      {name: '청포도', price: 13000 },
    ];

    const priceSumOverOrEqual10000 = go(
      fruits,
      fruits => filter(fruit => fruit.price >= 10000, fruits),
      fruits => map(fruit => fruit.price, fruits),
      prices => reduce((a, b) => a + b, prices),
    );

    expect(priceSumOverOrEqual10000).toEqual(58000);
  });
});