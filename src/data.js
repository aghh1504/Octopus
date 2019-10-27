import buld from "../src/assets/bulb.jpg";

export const products = [
  {
    id: 1,
    image: {
      url: buld,
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
