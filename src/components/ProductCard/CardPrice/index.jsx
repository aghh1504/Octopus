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

export default function CardPrice({
  id,
  price,
  decrementQuantity,
  incrementQuantity,
  postOrder,
  maxQuantity,
  order: { quantity, status }
}) {
  const handleRemoveItem = () => quantity > 1 && decrementQuantity();

  const handleAddItem = () => quantity < maxQuantity && incrementQuantity();

  const handleAddOrder = () => postOrder({ id, quantity });

  const buttonText = status === "OK" ? "Added!" : "Add to cart";

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
