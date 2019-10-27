import React from "react";

import octopusLogo from "assets/octopus_logo.png";
import HumburgerMenu from "../HumburgerMenu";
import { Wrapper } from "./styles.jsx";

export default function Header() {
  return (
    <Wrapper>
      <img src={octopusLogo} alt="Octopus Logo" height="40" width="200"></img>
      <HumburgerMenu />
    </Wrapper>
  );
}
