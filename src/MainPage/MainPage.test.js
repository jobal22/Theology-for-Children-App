import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import TCContext from '../Context/TCContext';

describe('MainPage component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <MainPage />
        </TCContext.Provider>);
  });
});
