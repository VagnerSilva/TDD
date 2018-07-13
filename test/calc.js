
const { expect } = require('chai');
const calc = require('../src/calc');


describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method sum, sub, mult, div', () => {
      const types = ['sum', 'sub', 'mult', 'div'];
      Object.keys(calc).forEach((value, index) => {
        expect(value).to.include(`${types[index]}`);
        expect(calc[value]).to.be.a('function');
      });
    });
  });
  describe('Calc Test', () => {
    it('should sum two numbers (1,2) and as result return the sum this numbers (3)', () => {
      const num1 = 1;
      const num2 = 2;

      expect(calc.sum(num1, num2)).to.be.equal(num1 + num2);
    });

    it('should subtract two numbers (1,2) and as result return the subtraction this numbers (1)', () => {
      const num1 = 1;
      const num2 = 2;

      expect(calc.sub(num1, num2)).to.be.equal(num1 - num2);
    });

    it('should multiply two numbers (3,2) and as result return the multiple this numbers (6)', () => {
      const num1 = 3;
      const num2 = 2;

      expect(calc.mult(num1, num2)).to.be.equal(num1 * num2);
    });

    it('should divide two numbers (6,2) and as result return the division this numbers (3)', () => {
      const num1 = 6;
      const num2 = 2;

      expect(calc.div(num1, num2)).to.be.equal(num1 / num2);
    });

    it('should error if second number (6,0) is divided by zero (Divide 0)', () => {
      const num1 = 6;
      const num2 = 0;

      expect(calc.div(num1, num2)).to.throw();
    });
  });
});
