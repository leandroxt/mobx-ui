import React from 'react';

import Operation from './Operation';
import Resume from './Resume';
import Chart from './Chart';

export default () => (
  <div>
    <Header />
    <Operation />
    <Resume />
    <Chart />
  </div>
);

const Header = () => (
  <div className="header box">
    <div className="centralize">
      Bank account
    </div>
  </div>
);
