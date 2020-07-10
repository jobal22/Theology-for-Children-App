import React from 'react';
import { shallow } from 'enzyme';
import DailyReadingPlan from './DailyReadingPlan';
import TCContext from '../Context/TCContext';

describe('DailyReadingPlan component', () => {
  it('renders without crashing', () => {
    shallow(
      <TCContext.Provider >
        <DailyReadingPlan />
      </TCContext.Provider>);
  });
});