const assert = require('assert');
const index = require('./index');

const {
  splitAndMerge, convert,
  toCamelCase, reverseWords,
  stringExpansion
} = index;

describe('split and merge', function() {
  it('should return splitted string', function() {
    assert.equal(splitAndMerge('My name is John', ' '),
        'M y n a m e i s J o h n');
    assert.equal(splitAndMerge('Hello World!', ','),
        'H,e,l,l,o W,o,r,l,d,!');
  });
});

describe('convert', function() {
  it('should return array', function() {
    const hash = {
      name: 'Jeremy',
      age: 24,
      role: 'Software Engineer'
    };
    const array = [
      ['name', 'Jeremy'],
      ['age', 24],
      ['role', 'Software Engineer']
    ];
    assert.deepEqual(convert(hash), array);
  });
});

describe('to camel case', function() {
  it('should return camel casing string', function() {
    assert.equal(toCamelCase('the-stealth-warrior'),
        'theStealthWarrior');
  });
  it('should capitalize first word if original was capitalized', function() {
    assert.equal(toCamelCase('The-stealth-warrior'),
        'TheStealthWarrior');
  });
  it('should return camel casing string without delimiters', function() {
    assert.equal(toCamelCase('hello_--_my-_-sweet__doctor'),
        'helloMySweetDoctor');
  });
  it('should return an empty string', function() {
    assert.equal(toCamelCase('_-_-_-'), '');
  });
  it('should return an empty string', function() {
    assert.equal(toCamelCase('- - -'), '');
  });
});

describe('reverse words in the sentence', function() {
  it('should return reversed words', function() {
    assert.equal(reverseWords(' A fun little challenge! '),
        ' A nuf elttil !egnellahc ');
  });
});

describe('string expansion', function() {
  it('should process string with normal pairs (multiplier-symbol)', function() {
    assert.equal(stringExpansion('3D2a5d2f'),
        'DDDaadddddff');
  });
  it('should process string if multiplier is repeated several times', function() {
    assert.equal(stringExpansion('3d332f2a'),
        'dddffaa');
  });
  it('should process string with one symbol without multiplier', function() {
    assert.equal(stringExpansion('b3D'), 'bDDD');
  });
  it('should process string without miltipliers (symbols only)', function() {
    assert.equal(stringExpansion('abcde'), 'abcde');
  });
  it('should return empty string if input is empty', function() {
    assert.equal(stringExpansion(), '');
  });
});
