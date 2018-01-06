import React from 'react';
import { observer, inject } from 'mobx-react';

/* eslint react/prop-types: off */

@inject('txStore')
@observer
export default class Chart extends React.Component {
  componentDidMount() {
    const { txStore } = this.props;
    txStore.getCompiled();
  }

  render() {
    const { txStore } = this.props;
    const { compiled } = txStore;

    const higherNumber = compiled[0] ? compiled[0].value : 0;

    return (
      <div className="content box centralize">
        Gráfico de gastos
        {
          compiled.map(item => (
            <div
              key={item.tag}
              style={{
                width: `${((item.value / higherNumber) * 100).toFixed(1)}%`,
                height: '30px',
                backgroundColor: '#dd4b61',
                marginBottom: '12px',
                color: 'white',
                paddingLeft: '15px'
              }}
            >
              {`${item.tag} -  R$ ${item.value * -1}`}
            </div>
          ))
        }
      </div>
    );
  }
}
