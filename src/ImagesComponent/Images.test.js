import React from 'react';
import { shallow } from 'enzyme';
import Images from './Images';
import TCContext from '../Context/TCContext';

describe('StringReplace component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <Images />
        </TCContext.Provider>);
  });
});
