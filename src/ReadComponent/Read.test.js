import React from 'react';
import { shallow } from 'enzyme';
import Read from './Read';
import TCContext from '../Context/TCContext';

describe('Read component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <Read />
        </TCContext.Provider>);
  });
});
