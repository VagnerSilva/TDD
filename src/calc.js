
module.exports = {
  sum: (...args) => args.reduce((total, value) => total + value, 0),
  sub: (...args) => args.reduce((value, total) => -total - value, 0),
  mult: (...args) => args.reduce((total, value) => total * value),
  div: (...args) => args.reduce((total, value) => {
    if (value === 0) throw new Error('Divide 0');
    return total / value;
  }),
};
