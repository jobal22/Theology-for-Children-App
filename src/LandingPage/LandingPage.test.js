import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';
import TCContext from '../Context/TCContext';

describe('LandingPage component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <LandingPage />
      </TCContext.Provider>);
  });
});