import axios from 'axios';

const sendOperation = operation =>
  axios.post('/tx', operation);

const getBalance = () =>
  axios.get('/balance');

const getTx = () =>
  axios.get('/tx');

const getCompiled = () =>
  axios.get('/compiled');

export default {
  sendOperation,
  getBalance,
  getTx,
  getCompiled
};
