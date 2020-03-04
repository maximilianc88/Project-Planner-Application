// eslint-disable-next-line strict
`use strict`;
const accumulate = require(`../index`);
describe(`accumulate()`, () => {
  it(`should return integer less than 1`, () => {
    const num = 0;
    const expected = 0;
    const actual = accumulate(num);
    expect(actual).toEqual(expected);
  });
  it(`should return null if no parameter provided`, () => {
    const expected = null;
    const actual = accumulate();
    expect(actual).toEqual(expected);
  });

  it(`should return null if it takes a non a number value`, () => {
    const num = `test`;
    const expected = null;
    const actual = accumulate(num);
    expect(actual).toEqual(expected);
  });
  it(`should return the sum of all numbers from 1 to provided number`, () => {
    const num = 5;
    const expected = 15;
    const actual = accumulate(num);
    expect(actual).toEqual(expected);
  });
});
