import React from 'react';
import { mount } from 'enzyme';

import Pluralize from './index';

describe('AnExample', () => {
  it('is a div', () => {
    const example = mount(<Pluralize word="test" count={1} />);
    expect(example.find('div').length).toEqual(1);
  });
});
