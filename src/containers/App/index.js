import React from "react";
import { connect } from "react-redux";

import { fetchProductsRequest } from "actions/products";
import { decrementQuantity, incrementQuantity, postOrder } from "actions/order";
import { getProducts } from "selectors/products";
import { getOrder } from "selectors/order";

import Header from "components/Header";
import Footer from "components/Footer";
import ProductCard from "components/ProductCard";
import { GlobalStyle } from "./styles";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchProductsRequest();
  }
  render() {
    const {
      dispatchIncrementQuantity,
      dispatchDecrementQuantity,
      dispatchPostOrder,
      products,
      order
    } = this.props;

    return (
      <main>
        <GlobalStyle />
        <Header />
        {products.length > 0 &&
          products.map(product => (
            <ProductCard
              product={product}
              postOrder={dispatchPostOrder}
              order={order}
              incrementQuantity={dispatchIncrementQuantity}
              decrementQuantity={dispatchDecrementQuantity}
            />
          ))}
        <Footer />
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchProductsRequest: () => dispatch(fetchProductsRequest()),
    dispatchIncrementQuantity: () => dispatch(incrementQuantity()),
    dispatchDecrementQuantity: () => dispatch(decrementQuantity()),
    dispatchPostOrder: (id, quantity) => dispatch(postOrder(id, quantity))
  };
}

function mapStateToProps(state) {
  return {
    products: getProducts(state),
    order: getOrder(state)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
