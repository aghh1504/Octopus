import { Record } from "immutable";

const OrderItem = Record(
  {
    id: null,
    quantity: 0
  },
  "OrderRecord"
);

class OrderItemModel extends OrderItem {}

export default OrderItemModel;

export function OrderItemFactory(props) {
  return new OrderItemModel(props);
}
