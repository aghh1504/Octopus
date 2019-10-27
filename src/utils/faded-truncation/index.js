import { css } from "styled-components";

export default function fadedTruncation({
  linesToShow,
  lineHeight,
  width = "20%",
  maxWidth = "20%",
  backgroundColor = "white"
}) {
  return css`
    max-height: ${lineHeight * linesToShow}px;
    overflow: hidden;
    position: relative;
    display: block;

    &::before {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        ${backgroundColor} 50%
      );
      content: "\\200c";
      display: block;
      position: absolute;
      right: 0;
      top: ${lineHeight * (linesToShow - 1)}px;
      width: ${width};
    }
  `;
}
