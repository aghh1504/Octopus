// @flow
import React from 'react';
import { mount } from 'enzyme';
import theme from 'src/utils/theme';
import faker from 'faker';

import { ExpandableTextComponent } from '..';

describe('ExpandableText', () => {
  test('clicking StyledLink should expand the text', () => {
    const wrapper = mount(
      <ExpandableTextComponent theme={theme} linesToShow={2}>
        {faker.lorem.words(300)}
      </ExpandableTextComponent>
    );

    // There is no easy way to simulate DOM getBoundingClientRect() method
    wrapper.setState({ overflowing: true });

    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('overflowing')).toBeTruthy();

    wrapper.find('StyledLink').simulate('click');

    expect(wrapper.state('open')).toBeTruthy();
  });
});
