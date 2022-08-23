const assert = require("node:assert/strict");

// Function returns true if n > 10; else returns false;
function greaterThanTen(n) {
  // return n > 10 ? true : false;
  if (n > 10) return true;
  return false;
}

describe("greatThanTen tests", () => {
  it("should test for false", () => {
    let actual = greaterThanTen(9);
    let expected = false;
    assert.strictEqual(actual, expected);
  });

  it("should test for true", () => {
    let actual = greaterThanTen(10);
    let expected = false;
    assert.strictEqual(actual, expected);
  });

  it("should test for true", () => {
    let actual = greaterThanTen(11);
    let expected = true;
    assert.strictEqual(actual, expected);
  });
});
