import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";

export const StyledLink = styled.a`
  color: #cf0677;
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  padding-top: 15px;
`;

export const Text = styled.div`
  position: relative;
  overflow: ${ifProp("visible", "visible", "hidden")};
  ${ifProp(
    { visible: true },
    css`
      max-height: none;
    `,
    css`
      max-height: calc(16px * ${prop("lineHeigth")});
    `
  )};
`;
