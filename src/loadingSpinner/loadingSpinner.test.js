import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './loadingSpinner';
import TCContext from '../Context/TCContext';

describe('loadingSpinner component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <LoadingSpinner />
        </TCContext.Provider>);
  });
});
