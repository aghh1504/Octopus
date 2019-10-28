import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "../";
import products from "./fixtures";

const mockStore = configureStore([]);
let store;
let component;

beforeEach(() => {
  store = mockStore({
    myState: "sample text"
  });
});

describe("<App />", () => {
  it("should render correctly", () => {
    component = shallow(
      <Provider store={store}>
        <App
          products={products}
          order={{ status: "OK" }}
          dispatchPostOrder={jest.fn()}
        />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
