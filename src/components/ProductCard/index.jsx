import React from "react";

import CardHeader from "./CardHeader";
import CardPrice from "./CardPrice";
import CardDescription from "./CardDescription";
import CardSpecifications from "./CardSpecifications";
import CardPerformance from "./CardPerformance";

export default function ProductCard({ products, postOrder, orderStatus }) {
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
          performance_first,
          performance_second,
          id
        }) => (
          <React.Fragment key={id}>
            <CardHeader image={image} title={title} details={details} />
            <CardPrice
              price={price}
              maxQuantity={max_quantity}
              postOrder={postOrder}
              id={id}
              orderStatus={orderStatus}
            />
            <CardDescription description={description} />
            <CardSpecifications specifications={specifications} />
            <CardPerformance
              performanceSecond={performance_second}
              performanceFirst={performance_first}
            />
          </React.Fragment>
        )
      )
  );
}
