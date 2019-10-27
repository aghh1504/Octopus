import React from "react";

import ExpandableText from "../../ExpandableText";
import { Section, SecondaryHeading } from "../../styles";

export default function CardDescription({ description }) {
  return (
    <Section light>
      <SecondaryHeading>Description</SecondaryHeading>
      <ExpandableText lineHeigth={8}>
        <p>{description}</p>
      </ExpandableText>
    </Section>
  );
}
