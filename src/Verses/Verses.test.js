import React from 'react';
import { shallow } from 'enzyme';
import Verses from './Verses';
import TCContext from '../Context/TCContext';

describe('Verses component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <Verses />
        </TCContext.Provider>);
  });
});
