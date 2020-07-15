import React from 'react';
import { shallow } from 'enzyme';
import Quiz from './Quiz';
import TCContext from '../Context/TCContext';

describe('StringReplace component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <Quiz />
        </TCContext.Provider>);
  });
});
