import React from 'react';
import { observer, inject } from 'mobx-react';

/* eslint react/prop-types: off */

@inject('txStore')
@observer
export default class Resume extends React.Component {
  componentDidMount() {
    const { txStore } = this.props;
    txStore.getTx();
  }

  render() {
    const { txStore } = this.props;
    return (
      <div className="content box centralize">
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Valor</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {txStore.tx.map(tx => (
              <tr key={tx.id}>
                <td>{tx.tag}</td>
                <td className={`${tx.value >= 0.00 ? 'blue' : 'red'}`}>R$ {tx.value.toFixed(2)}</td>
                <td>{tx.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
