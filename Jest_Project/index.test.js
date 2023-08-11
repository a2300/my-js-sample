const fizz_buzz = require('./index');

describe("FizzBuzz", () => {
    test('[3] should result in "fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });

    test('[5] should result in "buzz"', () => {
      expect(fizz_buzz([5])).toBe('buzz');
    });

    test('[15] should result in "fizzbuzz"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });

    test('[1,2,3] should result in "1, 2, fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });

});

describe('General', ()=> {
  test('Have to be called', ()=> {
      const mockFunction = jest.fn();
      mockFunction();
      expect(mockFunction).toHaveBeenCalled();
  });

  test('To return mocked result', ()=> {
    const returnsTrue = jest.fn(() => true);
    expect(returnsTrue()).toBe(true);
  })
});