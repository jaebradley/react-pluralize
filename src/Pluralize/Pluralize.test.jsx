import React from 'react';
import { mount } from 'enzyme';

import Pluralize from './index';

describe('Pluralize', () => {
  it('contains a div', () => {
    const example = mount(<Pluralize word="test" count={1} />);
    expect(example.find('div').length).toEqual(1);
    expect(example.text()).toEqual('1 test');
  });

  describe('includes count', () => {
    it('contains single value', () => {
      const example = mount(<Pluralize word="test" count={1} />);
      expect(example.text()).toEqual('1 test');
    });

    it('contains multiple values', () => {
      const example = mount(<Pluralize word="test" count={5} />);
      expect(example.text()).toEqual('5 tests');
    });
  });

  describe('does not include count', () => {
    it('contains single value', () => {
      const example = mount(<Pluralize word="test" count={1} includeCounts={false} />);
      expect(example.text()).toEqual('test');
    });

    it('contains multiple values', () => {
      const example = mount(<Pluralize word="test" count={5} includeCounts={false} />);
      expect(example.text()).toEqual('tests');
    });
  });
});
