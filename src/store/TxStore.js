import { observable } from 'mobx';

import TxService from '../service/TxService';

export default class TxStore {
  @observable tx;
  @observable tag;
  @observable value;
  @observable balance;
  @observable compiled;

  constructor() {
    this.tx = [];
    this.tag = '';
    this.value = 0.00;
    this.balance = 0.00;
    this.compiled = [];
  }

  newOperation(operation) {
    TxService.sendOperation(operation)
      .then((tx) => {
        this.tx = tx.data;
        this.getBalance();
        this.getCompiled();
      });
  }

  getTx() {
    TxService.getTx()
      .then((response) => {
        this.tx = response.data;
      });
  }

  getBalance() {
    TxService.getBalance()
      .then((response) => {
        this.balance = response.data.balance;
      });
  }

  getCompiled() {
    TxService.getCompiled()
      .then((response) => {
        this.compiled = response.data;
      });
  }
}
