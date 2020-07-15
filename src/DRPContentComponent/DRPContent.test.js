import React from 'react';
import { shallow } from 'enzyme';
import StringReplace from './DRPContent';
import TCContext from '../Context/TCContext';

describe('StringReplace component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <StringReplace />
        </TCContext.Provider>);
  });
});
