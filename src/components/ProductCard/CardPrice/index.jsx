import React from "react";

import { formatPrice } from "../../../utils/price-formatter";
import { Section } from "../../styles";

import { PriceWrapper, Price, Counter, Button } from "./styles.jsx";

export default function CardPrice({ price, quantity, addItem, removeItem }) {
  return (
    <Section>
      <PriceWrapper>
        <Price>{formatPrice(price)}</Price>
        <Counter>
          <div className="qty">QTY</div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </Counter>
      </PriceWrapper>
      <Button>Add to cart</Button>
    </Section>
  );
}
