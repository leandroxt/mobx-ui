import React from 'react';

import Operation from './Operation';
import Resume from './Resume';
import Grafico from './Grafico';

export default () => (
  <div>
    <Header />
    <Operation />
    <Resume />
    <Grafico />
  </div>
);

const Header = () => (
  <div className="header box">
    <div className="centralize">
      Bank account
    </div>
  </div>
);
