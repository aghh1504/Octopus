import styled from "styled-components";
import { ifProp, ifNotProp, prop } from "styled-tools";

export const StyledLink = styled.a`
  color: #cf0677;
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  padding-top: 15px;
`;

export const Text = styled.div`
  position: relative;
  max-height: calc(16px * ${prop("lineHeigth")});
  overflow: ${ifNotProp("visible", "hidden", "visible")};
  max-height: ${ifProp({ visible: true }, "none")};
`;
