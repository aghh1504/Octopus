import styled from "styled-components";
import { ifProp } from "styled-tools";

export const Section = styled.section`
  background-color: ${ifProp({ light: true }, "#011739")};
  padding: 30px 50px;
`;

export const PrimaryHeading = styled.h1`
  font-weight: bold;
  font-size: 35px;
  padding: 20px 0;
  line-height: 1.2;
`;

export const SecondaryHeading = styled.h2`
  font-size: 30px;
  padding-bottom: 20px;
`;
