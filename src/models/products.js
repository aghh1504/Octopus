import { Record } from "immutable";

const Product = Record(
  {
    id: null,
    name: "",
    details_info: "",
    price: { amount: 0, currency: "" },
    quantity: 0,
    description: "",
    brand: "",
    weight: "",
    dimensions: "",
    model_number: "",
    colour: "",
    type: "",
    socket: "",
    min_rate: 0,
    max_rate: 0
  },
  "ProductRecord"
);

class ProductModel extends Product {}

export default ProductModel;

export function productFactory(props) {
  return new ProductModel(props);
}
