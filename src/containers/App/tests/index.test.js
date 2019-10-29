import React from "react";
import { Map, fromJS } from "immutable";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "../";

const mockStore = configureStore([]);
let store;
let component;

beforeEach(() => {
  store = mockStore(
    fromJS({
      entities: Map({
        products: [
          {
            id: "1",
            image: {
              url: "/",
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
        ],
        order: { status: "OK", quantity: 1 }
      })
    })
  );
});

describe("<App />", () => {
  it("should render ProductCard", () => {
    component = mount(
      <Provider store={store}>
        <App dispatchPostOrder={jest.fn()} />
      </Provider>
    );
    expect(component.find("ProductCard")).toHaveLength(1);
  });
});
