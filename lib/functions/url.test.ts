import { makeNonProtocolRelative } from "./url";

describe("url processing tests", () => {
  it("handles empty", () => {
    expect(makeNonProtocolRelative(null)).toBe("");
    expect(makeNonProtocolRelative("")).toBe("");
  });

  it("handles relative", () => {
    expect(makeNonProtocolRelative("//google.com")).toBe("https://google.com");
  });

  it("skips processing non-relative urls", () => {
    expect(makeNonProtocolRelative("google.com")).toBe("google.com");
    expect(makeNonProtocolRelative("https://google.com")).toBe("https://google.com");
    expect(makeNonProtocolRelative("http://google.com")).toBe("http://google.com");
  });
});
