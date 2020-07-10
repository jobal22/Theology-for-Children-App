import React from 'react';
import { shallow } from 'enzyme';
import Books from './books';
import TCContext from '../Context/TCContext';

describe('Books component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <Books />
      </TCContext.Provider>);
  });
});