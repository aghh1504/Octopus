import React from "react";

import { Stripe } from "./styles";

export default class HumburgerMenu extends React.Component {
  render() {
    return (
      <div>
        <Stripe />
        <Stripe />
        <Stripe />
      </div>
    );
  }
}
