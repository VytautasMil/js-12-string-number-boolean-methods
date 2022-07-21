//https://www.w3schools.com/js/js_number_methods.asp

const num1 = 50;
const num2 = 14.5;

// number.toFixed(2)
console.log('num1.toFixed(2) ===', num1.toFixed(2));
console.log('num2.toFixed(2) ===', num2.toFixed(2));

// parasyti funkcija kuri gavusi skaiciu grazina valueta eurais
// makeMoney() paduodam 50 gaunam  €50.00

// patobulinti funkcija kad galetume ivesti valiutos simboli

//  issiaiskinti kuo skiriasi sie metodai
// The Number() method - pavercia i skaiciu priima stringine skaiciau versija
// The parseInt() method - paims viska iki ras neskaiciu
// The parseFloat() method

const str1 = '12.35.5xy';
console.log('Number(str1) ===', Number(str1));
console.log('Number(str1) ===', parseInt(str1));
console.log('Number(str1) ===', parseFloat(str1));
console.log('Number(true) ===', Number(false));

// Date
const theStartOfTime = new Date('1970-01-01');
const theStartOfTimeMs = Number(theStartOfTime);
const tenDaysAheadMs = theStartOfTimeMs + 100 * 86400000;
const tenDaysAhead = new Date(tenDaysAheadMs);
console.log('tenDaysAhead ===', tenDaysAhead.toLocaleString('lt-LT', { dateStyle: 'long' }));

// Boolean

const user457 = '';
const user458 = 'james';

// Falsy Javascript values
// undefined, null, '', NaN, 0,

const user457B = Boolean(user457);
console.log('user457B ===', user457B);

const user458B = Boolean(user458);
console.log('user458B ===', user458B);

const numberArr = [];
if (numberArr.length > 0) {
  console.log('masyvas ne tuscias');
} else {
  console.log('masyvas tuscias');
}