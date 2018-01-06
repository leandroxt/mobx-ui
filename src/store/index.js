import { observable } from 'mobx';

import service from '../service';

export default class {
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
    service.sendOperation(operation)
      .then(({ data }) => {
        this.tx = data;
        this.getBalance();
        this.getCompiled();
      });
  }

  getTx() {
    service.getTx()
      .then(({ data }) => {
        this.tx = data;
      });
  }

  getBalance() {
    service.getBalance()
      .then(({ data }) => {
        this.balance = data.balance;
      });
  }

  getCompiled() {
    service.getCompiled()
      .then(({ data }) => {
        this.compiled = data;
      });
  }
}
