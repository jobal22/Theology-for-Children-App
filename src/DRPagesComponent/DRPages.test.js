import React from 'react';
import { shallow } from 'enzyme';
import DRPages from './DRPages';
import TCContext from '../Context/TCContext';

describe('DRPages component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <DRPages />
      </TCContext.Provider>);
  });
});