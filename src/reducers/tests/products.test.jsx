import products from "../products";

const productsModel = [
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
      "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wiaint around warm start and flicker free features. Compatible with the Plumen Pendant. Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wiaint around warm start and flicker free features. Compatible with the Plumen Pendant.",
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

const setProductsAction = {
  type: "SET_PRODUCTS_REQUEST",
  payload: {
    data: {
      entities: { products: productsModel }
    }
  }
};

describe("Products Reducer", () => {
  it("should store the products into state on the right event", () => {
    const result = products(undefined, setProductsAction);
    expect(result).toMatchSnapshot();
    result.forEach(product => {
      expect(product._name).toEqual("ProductRecord");
    });
  });
});
