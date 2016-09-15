import React from 'react';
import { shallow } from 'enzyme';
// import TestUtils from 'react-addons-test-utils';

import Month from './';

describe('Month', function() {
  it('should render', function() {
    const wrapper = shallow(
      <Month date={new Date(2016, 0, 1)}/>
    );

    const instance = wrapper.instance();

    expect(instance.firstDateOfMonth).toEqual(new Date(2016, 0, 1));
    expect(instance.lastDateOfMonth).toEqual(new Date(2016, 0, 31));
  });
});
