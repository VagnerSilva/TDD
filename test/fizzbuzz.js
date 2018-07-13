
const { expect } = require('chai');
const fizzBuzz = require('../src/fizzbuzz');

/**
 * Desafio
 * Se divisivel por 3 - fizz
 * Se divisivel por 5 - buzz
 * Se divisilve por 3 e 5 - fizzbuzz
 * Se não mutiplo - numero
 */


describe('FizzBuzz', () => {
  it('Should return "Fizz" when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('Should return "Buzz" when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('Should return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('Should return input number when it is not a multiple of 3 and 5', () => {
    expect(fizzBuzz(16)).to.be.equal(16);
  });
});
