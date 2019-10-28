import React from "react";

import { formatPrice } from "utils/price-formatter";
import { Section } from "components/styles";

import {
  PriceWrapper,
  Price,
  Counter,
  Button,
  Quantity,
  QuantityButton,
  QuantityNb
} from "./styles";

export default class CardPrice extends React.Component {
  state = { quantity: 1 };

  handleRemoveItem = () => {
    const { quantity } = this.state;
    if (quantity > 0) {
      return this.setState(() => ({ quantity: quantity - 1 }));
    }
  };

  handleAddItem = () => {
    const { quantity } = this.state;
    const { maxQuantity } = this.props;
    if (maxQuantity > quantity) {
      return this.setState(() => ({ quantity: quantity + 1 }));
    }
  };

  handleAddOrder = () => {
    const { postOrder, id } = this.props;
    postOrder({ id, quantity: this.state.quantity });
  };

  render() {
    const { price, orderStatus } = this.props;
    const { quantity } = this.state;

    const buttonText = orderStatus === "OK" ? "Added!" : "Add to cart";

    return (
      <Section>
        <PriceWrapper>
          <Price>{formatPrice(price)}</Price>
          <Counter>
            <Quantity>QTY</Quantity>
            <QuantityButton onClick={this.handleRemoveItem}>-</QuantityButton>
            <QuantityNb>{quantity}</QuantityNb>
            <QuantityButton onClick={this.handleAddItem}>+</QuantityButton>
          </Counter>
        </PriceWrapper>
        <Button onClick={this.handleAddOrder}>{buttonText}</Button>
      </Section>
    );
  }
}
