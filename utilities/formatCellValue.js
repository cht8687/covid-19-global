import formatNumber from './formatNumber';

export default (value, plus = false) =>
  value ? (plus ? '+' : '') + formatNumber(value) : '';
