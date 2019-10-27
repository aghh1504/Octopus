import ProductModel, { productFactory } from "../products";

describe("Products model", () => {
  it("should create an products with selected props", () => {
    const productsData = [
      {
        id: 1,
        image: {
          url: "",
          heigth: 510,
          width: 435
        },
        title: "Energy saving light bulb",
        details: "25W // Packet of 4",
        price: { amount: 12.99, currency: "£" },
        max_quantity: 10,
        description:
          "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22",
        specifications: {
          brand: "Philips",
          weight: "77g",
          dimensions: "12.6x6.2x6.2cm",
          model_number: "E27 ES",
          colour: "Cool daylight",
          type: "LED",
          socket: "B22/E27"
        },
        performance_first: [],
        performance_second: []
      }
    ];

    const products = productFactory(productsData);

    expect(products).toBeInstanceOf(ProductModel);

    expect(products).toMatchSnapshot();
  });
});
