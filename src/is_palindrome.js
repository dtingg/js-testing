const isPalindrome = function isPalindrome(text) {
  let lowerText = text.toLowerCase().replace(/\W/g, "");

  let reverseString = "";

  let i = lowerText.length - 1;

  while (i >= 0) {
    reverseString += lowerText[i];
    i -= 1;
  }

  console.log(lowerText);
  console.log(reverseString);

  if (lowerText == reverseString) {
    return true;
  } else {
    return false;
  }  
};

module.exports = isPalindrome;
