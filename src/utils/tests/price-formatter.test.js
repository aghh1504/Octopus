import { formatPrice } from "../price-formatter";

describe("price formatter", () => {
  it("should format price correctly", () => {
    const price = { amount: 55, currency: "£" };
    expect(formatPrice(price)).toEqual("£55.00");
  });

  it("should return empty string if price object is corrupt", () => {
    const price = { amount: 55 };
    expect(formatPrice(price)).toEqual("");
  });

  it("should return empty string if price object is null", () => {
    const price = null;
    expect(formatPrice(price)).toEqual("");
  });

  it("should return price in following format if its a negative price -£20", () => {
    const price = { amount: -55, currency: "£" };
    expect(formatPrice(price)).toEqual("-£55.00");
  });
});
