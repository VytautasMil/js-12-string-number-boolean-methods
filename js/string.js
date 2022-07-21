'use strict';
console.log('main.js');

let str1 = 'Brown fox jumped over the lazy dog.';
// str.slice(nuoIndex, ikiIndex) =====================================

// gauti 'Brown'
const firstWord = str1.slice(0, 5);
console.log('firstWord ===', firstWord);

// gauti 1 paskutini zodi.
const lastWord = str1.slice(-5, -1);
console.log('lastWord ===', lastWord);
// gauti 3 paskutinius zodzius

// gauti sakinio dali pradziu iki 'jumped'
const jumpedWordIndex = str1.indexOf('jumped');
console.log('jumpedWordIndex ===', jumpedWordIndex);
const ikiJumped = str1.substring(0, jumpedWordIndex);
console.log('ikiJumped ===', ikiJumped);

// gauti zodi esanti pries 'over'

// str.substr(nuoIndex, length) =====================================

// gauti 11 simboliu nuo 'jumped'
const elevin = str1.substr(jumpedWordIndex, 11); // depricated - bus pasalintas tolimesnese versijose.

// string.toUpperCase()
const did = str1.toUpperCase();
console.log('did ===', did);
console.log('str1 ===', str1);

// string.concat()

const str2 = str1.concat(' ', 'Sun', ' ', 'is ', 'shining.');
console.log('str2 ===', str2);

// str.charAt(index) - grazina simboli toje vietoje

const str3 = 'sun is shining';
// gauti 'i'
const i = str3.charAt(4);

// gauti str3 sentence case - pirma raide didziaja

const str2Sentence = str3.charAt(0).toUpperCase() + str3.slice(1);

// parasyti funkcija kuri argumentu gauna stringa ir grazina pirmaja raide padidinta.

/**
 * this function makes first letter upper case
 * @param {string} str
 * @return {string}
 */
function makeSentenceCase(str) {
  const senC = str.charAt(0).toUpperCase() + str.slice(1);
  console.log('makeSentenceCase ===', senC);
  return senC;
}

makeSentenceCase(str3);
const upper = makeSentenceCase('forgot to upper case');

// str.split(per ka padalinti) -

const str1Arr = str1.split(' ');
console.log('str1Arr ===', str1Arr);

let capitalizedSentence = '';
for (const word of str1Arr) {
  capitalizedSentence += makeSentenceCase(word) + ' ';
}
console.log('capitalizedSentence ===', capitalizedSentence);

console.log('str1Arr.join(" ** ") ===', str1Arr.join(' '));

// regular expression regex

str1 = 'Brown fox jumped over the fox lazy dog.';

const sqrl = str1.replace(/FOX/gi, 'squrell');
console.log('sqrl ===', sqrl);