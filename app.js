'use strict';

// LAB: SORTING AND CAMPY SCI-FI

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |
*/
class Blob {
  constructor(name) {
    this.name = name;
    this.consumptionRate = 1;
  }
}

Blob.prototype.grow = function() {
  this.consumptionRate++;
}

Blob.prototype.setConsumptionRate = function(rate) {
  this.consumptionRate = rate;
}

var blob = new Blob('blob');

function hoursToDestroyDowington() {
  var foodCount = 1000;
  var hours = 0;
  while (foodCount > 0) {
    foodCount-= blob.consumptionRate;
    hours++;
    blob.grow();
  }
  return hours;
}

var hoursSpentInDowington = hoursToDestroyDowington();

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

console.log(hoursSpentInDowington);

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {

  this.setConsumptionRate(peoplePerHour);
  var foodCount = population;
  var hours = 0;
  if (!population) {
    return hours;
  }
  while (foodCount > 0) {
    foodCount-= blob.consumptionRate;
    hours++;
    blob.grow();
  }
  return hours;
}

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

assert(blob.hoursToOoze(500, 1) === 32,
  'hoursToOoze is 32 when starting rate is 1 and population is 500');
assert(blob.hoursToOoze(1000, 5) === 41,
  'hoursToOoze is 41 when starting rate is 5 and population is 1000');
assert((blob.hoursToOoze(1000, 1) - (blob.hoursToOoze(500, 1)) === 13,
  'Population of 1000 takes 13 more hours compared to population of 500'));

//*********************************************************
// PROBLEM 2: Universal Translator
//*********************************************************
var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

class SentientBeing {
  constructor(homePlanet, language) {
    this.homePlanet = homePlanet;
    this.language = language;
  }
}

SentientBeing.prototype.sayHello = function(sb) {
  return hello[sb.language];
}

class Human extends SentientBeing{
  constructor() {
    super('Earth', 'federation standard');
    this.race = 'Human';
  }
}

class Klingon extends SentientBeing{
  constructor() {
    super('Qo\'noS', 'klingon');
    this.race = 'Klingon';
  }
}

class Romulan extends SentientBeing{
  constructor() {
    super('Romulus', 'romulan');
    this.race = 'Romulan';
  }
}

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

assert((new Human()).race === 'Human',
  'Human\'s race should be \"Human\"');
assert((new Klingon()).race === 'Klingon',
  'Klingon\'s race should be \"Klingon\"');
assert((new Romulan()).race === 'Romulan',
  'Romulan\'s race should be \"Romulan\"');
assert((new Human()).homePlanet === 'Earth',
  'Human\'s home planet should be \"Earth\"');
assert((new Klingon()).homePlanet === 'Qo\'noS',
  'Klingon\'s planet should be \"Qo\'noS\"');

//
//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    return a.charCodeAt(a.length-1) - b.charCodeAt(a.length-1);
  }
  stringArray.sort(byLastLetter);
}

var hello1 = 'helloa';
var hello2 = 'hellob';
var hello3 = 'helloz';
var randomShit1 = 'asdhaksdhkasjhdaksljhdkajhaklsdd';

var correct1= [hello1, hello2, randomShit1, hello3];

var all = [hello2, hello3, hello1, randomShit1];
console.log(all);

var sortedAll = all.slice();
lastLetterSort(sortedAll);

assert(sortedAll.toString() ===  correct1.toString(),
  'sorted array should be the same to correct array');

var testString1 = 'aaaaaa';
var testString2 = 'aaaaab';
var testString3 = 'aaaaai';
var testString4 = 'aaaaak';
var testString5 = 'aaaaad';
var testString6 = 'aaaaae';
var testString7 = 'aaaaaa';
var testString8 = 'aaaaam';

var testStringArray = [testString1, testString2, testString3, testString4, testString5, testString6, testString7, testString8];
var correct2 = [testString1, testString7, testString2, testString5, testString6, testString3, testString4, testString8];
var testSortedArray = testStringArray.slice();
lastLetterSort(testSortedArray);

assert(testSortedArray.toString() ===  correct2.toString(),
  'sorted array should be the same to correct array');

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(item) {
    sum+= item;
  });
  return sum;
}

var whatever1 = [1,2,3,4,5,6];
var total1 = sumArray(whatever1);
var correctSum1 = 21;
assert(total1 === correctSum1,
  'total given by sumArray should be equal to given corect sum');

var whatever2 = [10,20,30,40,50,666];
var total2 = sumArray(whatever2);
console.log(total2);
var correctSum2 = 816;
assert(total2 === correctSum2,
  'total given by sumArray should be equal to given corect sum');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    return sumArray(a) - sumArray(b);
  });
}

var smallArr1 = [1,2,3,4];
var smallArr2 = [1000, 2000];
var smallArr3 = [99999999];
var smallArr4 = [9,9,9,9,9,9];

var arrOfArr1 = [smallArr1, smallArr2, smallArr3, smallArr4];
var testSortedArrOfArr1 = arrOfArr1.slice();
sumSort(testSortedArrOfArr1);
var correctArrOfArr1 = [smallArr1, smallArr4, smallArr2, smallArr3];
assert(testSortedArrOfArr1.toString() === correctArrOfArr1.toString(),
  'sorted arrays of arrays are not equal');

var smallArr5 = [7];
var smallArr6 = [199, 2031, 2013];
var smallArr7 = [10, 9, 8, 7, 6, 5];
var smallArr8 = [0];

var arrOfArr2 = [smallArr5, smallArr6, smallArr7, smallArr8];
var testSortedArrOfArr2 = arrOfArr2.slice();
sumSort(testSortedArrOfArr2);
var correctArrOfArr2 = [smallArr8, smallArr5, smallArr7, smallArr6];
assert(testSortedArrOfArr2.toString() === correctArrOfArr2.toString(),
  'sorted arrays of arrays are not equal');
