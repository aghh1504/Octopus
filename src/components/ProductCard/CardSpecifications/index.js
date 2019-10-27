import React from "react";

import ExpandableText from "../../ExpandableText";
import { Section, SecondaryHeading } from "../../styles";

import { Table, Row } from "./styles.jsx";

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
          <Row>
            <td>Brand</td>
            <td>{brand}</td>
          </Row>
          <Row>
            <td>Item weight</td>
            <td>{weight}</td>
          </Row>
          <Row>
            <td>Dimensions</td>
            <td>{dimensions}</td>
          </Row>
          <Row>
            <td>Item model number</td>
            <td>{model_number}</td>
          </Row>
          <Row>
            <td>Colour</td>
            <td>{colour}</td>
          </Row>
          <Row>
            <td>Type</td>
            <td>{type}</td>
          </Row>
          <Row>
            <td>Socket</td>
            <td>{socket}</td>
          </Row>
        </Table>
      </ExpandableText>
    </Section>
  );
}
