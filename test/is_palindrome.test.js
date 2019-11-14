const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  test('isPalindrome() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a palindrome with only lower case', () => {
    // Arrange
    const text = 'racecar';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test('fails for non-palindrome', () => {
    // Arrange
    const text = 'apple';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBeFalsy();
    expect(answer).toEqual(false);
  });

  test('empty test', () => {
    // Arrange
    const text = '';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test('works with numbers', () => {
    // Arrange
    const text = '123454321';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test('works with spaces', () => {
    // Arrange
    const text = 'kayak kayak';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });

  test('ignores whitespace and punctuation', () => {
    // Arrange
    const text = 'Too hot to hoot.';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
    expect(answer).toEqual(true);
  });
});
