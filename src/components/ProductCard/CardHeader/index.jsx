import React from "react";

import { Image, Description, ImageWrapper } from "./styles.jsx";
import { Section, PrimaryHeading } from "../../styles";

export default function CardHeader({ image, title, details }) {
  return (
    <>
      <ImageWrapper>
        <Image
          src={image.url}
          alt={title}
          heigth={image.heigth}
          width={image.width}
        />
      </ImageWrapper>
      <Section light>
        <PrimaryHeading>{title}</PrimaryHeading>
        <Description>{details}</Description>
      </Section>
    </>
  );
}
