const isPangram = function isPangram(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const letterDict = {};

  for (const char in alphabet) {
    letterDict[char] = false;
  }

  for (const char in text) {
    letterDict[char] = true;
  }

  for (const letter in letterDict) {
    if (letterDict[letter] === false) {
      return false
    }
  }

  return true;
};

module.exports = isPangram;