import { sayHello } from "../src/say-hello";

describe("Hello ", function (): void {
  it("should say hello", function (): void {
    expect(sayHello("Rapip")).toBe("Hello Rapip");
  });
});
