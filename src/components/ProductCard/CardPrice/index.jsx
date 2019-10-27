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
} from "./styles.jsx";

export default function CardPrice({ price, quantity, addItem, removeItem }) {
  return (
    <Section>
      <PriceWrapper>
        <Price>{formatPrice(price)}</Price>
        <Counter>
          <Quantity>QTY</Quantity>
          <QuantityButton>-</QuantityButton>
          <QuantityNb>1</QuantityNb>
          <QuantityButton>+</QuantityButton>
        </Counter>
      </PriceWrapper>
      <Button>Add to cart</Button>
    </Section>
  );
}
