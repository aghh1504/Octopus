import React from "react";

import ExpandableText from "components/ExpandableText";
import { Section, SecondaryHeading } from "components/styles";

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
