const expect = require("chai").expect;

describe("Hello function", () => {
  it("should return hello world", () => {
    expect("Hello World").to.equal("Hello World");
  });
});
