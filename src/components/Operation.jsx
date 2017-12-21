import React from 'react';
import { autobind } from 'core-decorators';
import { observer, inject } from 'mobx-react';

/* eslint react/prop-types: off */

@inject('txStore')
@autobind
@observer
export default class Operation extends React.Component {
  componentDidMount() {
    const { txStore } = this.props;
    txStore.getBalance();
    this.tag.focus();
  }

  submit(e) {
    e.preventDefault();
    const { txStore } = this.props;
    const value = parseFloat(this.value.value);
    txStore.newOperation({
      id: Date.now(),
      tag: this.tag.value,
      type: value > 0 ? 'credit' : 'debit',
      value
    });
    this.tag.value = '';
    this.value.value = 0.00;
    this.tag.focus();
  }

  render() {
    const { txStore } = this.props;
    return (
      <div className="content box centralize">
        <form className="operation" onSubmit={this.submit}>
          <div className="op-item">
            Tag:
            <input
              type="text"
              ref={(input) => { this.tag = input; }}
            />
          </div>
          <div className="op-item txt-center">
            Valor:
            <input
              type="number"
              step="0.01"
              ref={(input) => { this.value = input; }}
            />
          </div>
          <div className="op-item txt-center">
            <input type="submit" value="Enviar" />
          </div>
          <div className="op-item txt-right">
            <div className={`balance${txStore.balance >= 0.00 ? ' blue' : ' red'}`}>Saldo: R$ {txStore.balance.toFixed(2)}</div>
          </div>
        </form>
      </div>
    );
  }
}
