import React from "react";

import CardHeader from "./CardHeader";
import CardPrice from "./CardPrice";
import CardDescription from "./CardDescription";
import CardSpecifications from "./CardSpecifications";
import CardPerformance from "./CardPerformance";

export default function ProductCard({
  products,
  addItem,
  removeItem,
  quantity
}) {
  return (
    products.size > 0 &&
    products
      .valueSeq()
      .map(
        ({
          image,
          title,
          details,
          price,
          max_quantity,
          description,
          specifications,
          max,
          min,
          id
        }) => (
          <React.Fragment key={id}>
            <CardHeader image={image} title={title} details={details} />
            <CardPrice
              price={price}
              quantity={quantity}
              maxQuantity={max_quantity}
              addItem={addItem}
              removeItem={removeItem}
            />
            <CardDescription description={description} />
            <CardSpecifications specifications={specifications} />
            <CardPerformance max={max} min={min} />
          </React.Fragment>
        )
      )
  );
}
