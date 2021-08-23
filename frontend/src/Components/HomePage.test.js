import data from '../data.js';

const dataLength = data.length;
test("total number of cake images to equal 6", () => {
  expect(dataLength).toEqual(6);
});