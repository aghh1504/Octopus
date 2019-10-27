import React from "react";

import ExpandableText from "../../ExpandableText";
import { Section, SecondaryHeading } from "../../styles";

import { Table, Cell } from "./styles.jsx";

export default function CardSpecifications({
  specifications: {
    brand,
    colour,
    weight,
    dimensions,
    model_number,
    type,
    socket
  }
}) {
  return (
    <Section>
      <SecondaryHeading>Specifications</SecondaryHeading>
      <ExpandableText lineHeigth={16}>
        <Table>
          <tbody>
            <tr>
              <Cell>Brand</Cell>
              <Cell>{brand}</Cell>
            </tr>
            <tr>
              <Cell>Item weight</Cell>
              <Cell>{weight}</Cell>
            </tr>
            <tr>
              <Cell>Dimensions</Cell>
              <Cell>{dimensions}</Cell>
            </tr>
            <tr>
              <Cell>Item model number</Cell>
              <Cell>{model_number}</Cell>
            </tr>
            <tr>
              <Cell>Colour</Cell>
              <Cell>{colour}</Cell>
            </tr>
            <tr>
              <Cell>Type</Cell>
              <Cell>{type}</Cell>
            </tr>
            <tr>
              <Cell>Socket</Cell>
              <Cell>{socket}</Cell>
            </tr>
          </tbody>
        </Table>
      </ExpandableText>
    </Section>
  );
}
