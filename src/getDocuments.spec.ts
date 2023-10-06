import { test, expect } from "vitest";

// src/sum.test.ts
const sum = (a: number, b: number) => a + b;
test("sums two numbers", () => {
    expect(sum(4, 7)).toBe(11);
});