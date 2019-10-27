import * as React from "react";

import { StyledLink, Text } from "./styles";

export class ExpandableTextComponent extends React.Component {
  state = {
    open: false
  };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { children, lineHeigth } = this.props;
    const { open } = this.state;

    return (
      <>
        <div>
          <Text visible={open} lineHeigth={lineHeigth}>
            {children}
          </Text>
        </div>
        <StyledLink onClick={this.toggleOpen}>
          {open ? "Show less" : "Show more"}
        </StyledLink>
      </>
    );
  }
}

ExpandableTextComponent.displayName = "ExpandableText";

export default ExpandableTextComponent;
