const assert = require("node:assert/strict");

function createStringNCharacters(char, n) {
  let s = "";

  // implement

  return s;
}

// Returns an array of specified length; the
// first element will have the value of startValue,
// or else default to 0 if not set. Each array
// element increases in value from startValue
// by the increment. For example:
// createSequence(10, 2, 2)
// => [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
function createSequence(length, startValue, increment) {
  let a = [];

  // startValue should default to 0 if undefined

  // increment should default to 1 if undefined

  // assign elements to a using a loop

  return a;
}

function isArrayEqual(a, b) {
  if (!a || !b) return false;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

describe("createStringNCharacters tests", () => {
  it("should return 'aaaaa'", function () {
    let expected = "aaaaa";
    let actual = createStringNCharacters("a", 5);
    assert.strictEqual(actual, expected);
  });

  it("should return an empty string", () => {
    let expected = "";
    let actual = createStringNCharacters("X", 0);
    assert.strictEqual(actual, expected);
  });

  it("should return '1'", function () {
    let expected = "1";
    let actual = createStringNCharacters("1", 1);
    assert.strictEqual(actual, expected);
  });
});

describe("createSequence tests", () => {
  it("should be a simple sequence", () => {
    let expected = [0, 1, 2, 3, 4];
    let actual = createSequence(5, 0, 1);
    assert.strictEqual(
      isArrayEqual(expected, actual),
      true,
      "arrays are not equal"
    );
  });

  it("should handle defaults", () => {
    let expected = [0, 1, 2, 3, 4];
    let actual = createSequence(5);
    assert.strictEqual(
      isArrayEqual(expected, actual),
      true,
      "arrays are not equal"
    );
  });

  it("should be increment", () => {
    let expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let actual = createSequence(10, 2, 2);
    assert.strictEqual(
      isArrayEqual(expected, actual),
      true,
      "arrays are not equal"
    );
  });
});
