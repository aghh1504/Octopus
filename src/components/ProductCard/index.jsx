import React from "react";

import CardHeader from "./CardHeader";
import CardPrice from "./CardPrice";
import CardDescription from "./CardDescription";
import CardSpecifications from "./CardSpecifications";
import CardPerformance from "./CardPerformance";

export default function ProductCard({
  decrementQuantity,
  incrementQuantity,
  postOrder,
  order,
  products: {
    image,
    title,
    details,
    price,
    max_quantity,
    description,
    specifications,
    performance_first,
    performance_second,
    id
  }
}) {
  return (
    <>
      <CardHeader image={image} title={title} details={details} />
      <CardPrice
        price={price}
        maxQuantity={max_quantity}
        postOrder={postOrder}
        id={id}
        order={order}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <CardDescription description={description} />
      <CardSpecifications specifications={specifications} />
      <CardPerformance
        performanceSecond={performance_second}
        performanceFirst={performance_first}
      />
    </>
  );
}
