const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwxyz"

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwyz"

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeFalsy();
    expect(answer).toEqual(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = ""

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeFalsy();
    expect(answer).toEqual(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = "123the quick brown fox jumps over the lazy dog"

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  // Write your own test case
  test('pangram with capital letters', () => {
    // Arrange
    const text = "The quick brown fox jumps over the lazy dog"

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test('pangram with punctuation', () => {
    // Arrange
    const text = "the quick brown fox jumps over the lazy dog!!"

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });
});
