import { colorTypeGradients } from './utils';

describe('colorTypeGradients function', () => {
  test('should return an array of two colors for valid input', () => {
    const expectedOutput = ['#a8ff98', '#d6a2e4'];
    const actualOutput = colorTypeGradients('grass', 'poison', 2);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test('should return an array of one color for length of 1', () => {
    const expectedOutput = ['#dcdcdc', '#dcdcdc'];
    const actualOutput = colorTypeGradients('normal', undefined, 1);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test('should return an array of two "gainsboro" colors for invalid input', () => {
    const expectedOutput = ['gainsboro', 'gainsboro'];
    const actualOutput = colorTypeGradients('invalidType1', 'invalidType2', 2);
    expect(actualOutput).toEqual(expectedOutput);
  });
});