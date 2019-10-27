import React from "react";
import { connect } from "react-redux";

import { fetchProductsRequest } from "../../actions/products";
import { addItem, removeItem } from "../../actions/order";
import { getProducts } from "../../selectors/products";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { GlobalStyle } from "./styles";

//remove later
import { products } from "../../data";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchProductsRequest();
  }
  render() {
    console.log("products", products);

    const { dispatchAddItem, dispatchRemoveItem } = this.props;

    return (
      <main>
        <GlobalStyle />
        <Header />
        <ProductCard
          products={products}
          addItem={dispatchAddItem}
          removeItem={dispatchRemoveItem}
        />
        <Footer />
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchProductsRequest: () => dispatch(fetchProductsRequest()),
    dispatchAddItem: () => dispatch(addItem()),
    dispatchRemoveItem: () => dispatch(removeItem())
  };
}

function mapStateToProps(state) {
  return {
    products: getProducts(state)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
