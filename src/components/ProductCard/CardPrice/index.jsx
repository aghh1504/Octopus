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
  state = { quantity: 1, buttonText: "Add to cart" };

  render() {
    const { price, postOrder, id, maxQuantity, orderStatus } = this.props;
    const { quantity, buttonText } = this.state;

    const handleRemoveItem = () => {
      const { quantity } = this.state;
      if (quantity > 0) {
        return this.setState(() => ({ quantity: quantity - 1 }));
      }
    };
    const handleAddItem = () => {
      const { quantity } = this.state;
      if (maxQuantity > quantity) {
        return this.setState(() => ({ quantity: quantity + 1 }));
      }
    };
    const handleAddOrder = () => {
      postOrder({ id, quantity: this.state.quantity });
      if (orderStatus === "OK") {
        return this.setState(() => ({ buttonText: "Added!" }));
      }
    };

    return (
      <Section>
        <PriceWrapper>
          <Price>{formatPrice(price)}</Price>
          <Counter>
            <Quantity>QTY</Quantity>
            <QuantityButton onClick={handleRemoveItem}>-</QuantityButton>
            <QuantityNb>{quantity}</QuantityNb>
            <QuantityButton onClick={handleAddItem}>+</QuantityButton>
          </Counter>
        </PriceWrapper>
        <Button onClick={handleAddOrder}>{buttonText}</Button>
      </Section>
    );
  }
}
