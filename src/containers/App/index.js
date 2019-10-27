import React from "react";
import { connect } from "react-redux";

import { fetchProductsRequest } from "actions/products";
import { postOrder } from "actions/order";
import { getProducts } from "selectors/products";
import { getOrderStatus } from "selectors/order";

import Header from "components/Header";
import Footer from "components/Footer";
import ProductCard from "components/ProductCard";
import { GlobalStyle } from "./styles";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchProductsRequest();
  }
  render() {
    const { dispatchPostOrder, products, orderStatus } = this.props;

    return (
      <main>
        <GlobalStyle />
        <Header />
        <ProductCard
          products={products}
          postOrder={dispatchPostOrder}
          orderStatus={orderStatus}
        />
        <Footer />
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchProductsRequest: () => dispatch(fetchProductsRequest()),
    dispatchPostOrder: (id, quantity) => dispatch(postOrder(id, quantity))
  };
}

function mapStateToProps(state) {
  return {
    products: getProducts(state),
    orderStatus: getOrderStatus(state)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
