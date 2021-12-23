import { expect, test } from "vitest"
import { Component } from "./export.js"

test("should import component", () => {
  expect(typeof Component).toBe("function")
})
