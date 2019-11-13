const isPangram = function isPangram(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const alphabetObject = {};

  alphabet.forEach((letter) => {
    alphabetObject[letter] = false;
  });

  text.toLowerCase().split("").forEach((letter) => {
    alphabetObject[letter] = true;
  });

  return Object.values(alphabetObject).every((value) => value === true);
};

module.exports = isPangram;
