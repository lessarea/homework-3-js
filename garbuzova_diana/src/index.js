const splitAndMerge = (str, sp) => {
  const words = str.split(' ');
  const splittedWords = words.map(
      word => word.split('').join(sp)
  );
  return splittedWords.join(' ');
};

const convert = hash => Object.entries(hash);

const toCamelCase = str => {
  return str.replace(/[-_ ]+(.)?/g,
      (match, char) => char ? char.toUpperCase() : '');
};

const reverseWords = str => {
  const words = str.split(' ');
  const reversedWords = words.map(
      word => word.split('').reverse().join('')
  );
  return reversedWords.join(' ');
};

const stringExpansion = str => {
  if (str) {
    let result = '';
    for (let index = 0; index < str.length; index++) {
      const current = str[index];
      const next = str[index + 1];
      if (isNaN(current)) {
        if (next && isNaN(next)) {
          result += current + next;
        } else {
          result += current;
        }
      }
      if (next && isNaN(next)) {
        result += next.repeat(current);
        index++;
      }
    }
    return result;
  }
  return '';
};

module.exports = {
  splitAndMerge,
  convert,
  toCamelCase,
  reverseWords,
  stringExpansion,
};