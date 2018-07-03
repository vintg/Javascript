// MODULE 02
//001
var answer = {
  finalValueOfX: -7 // CHANGE 'null' to correct answer
};
//002
var answer = {
  finalValueOfX: [4,6,1], // FILL THIS IN
  finalValueOfY: [4,6,6], // FILL THIS IN
  finalValueOfZ: [4,6,1] // FILL THIS IN
};
//003
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED ['+ testName + ']' + ' Expected \"' + expected + '\", but got \"' + actual + '\"');
  }
}
//004
function assertArraysEqual(actual, expected, testName) {
  var eqlen = actual.length === expected.length;
  var equal = true;
  for (var i =0; i< actual.length;i++){
    if (actual[i] !== expected[i]){ equal=false;}
  }
  
  if (eqlen && equal) {
    console.log('passed'); 
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected +'", but got "' + actual + '"');
  }
}
//005
function assertObjectsEqual(actual, expected, testName) {
  var sactual = JSON.stringify(actual);
  var sexpected = JSON.stringify(expected);
  if (sactual === sexpected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + sexpected + ', but got ' + sactual);
  }
}
//006
function assertWithinRange(low, high, actual, testName) {
  if (actual <=high && actual >=low) {
    console.log('passed'); 
  } else {
    console.log('FAIL [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
}
//007
function assertEqual(actual, expected, testName) {
  if (actual === expected){
    console.log('passed');
  } else {
    console.log('FAILED ' + testName + ', got ' +actual+ ' but expected '+expected);
  }
}
// Code Under Test:
function square(n) {
  return n * n;
}
// Calls to 'assertEqual':
assertEqual(square(2), 4, 'square n');
assertEqual(square(-3),9, 'square n');

//008
function every(array, callbackFunction) {
  var doesEveryElementPass = true;
  array.forEach(function(element) {
     if (callbackFunction(element)===false){ doesEveryElementPass= false; }
  });
  return doesEveryElementPass;
}

function isNum(element){
    return (typeof element==='number');
}

function assertEqual(actual, expected, testName) {
  if (actual === expected){
    console.log('passed')
  } else {
    console.log('failed ['+testName +'] Expected '+expected + ', but received '+actual);
  }
}
  
var arr1=[1,2,3,4,5];
var arr2=['1','2','3','4','5'];
assertEqual(every(arr1,isNum), true, 'isNum');
assertEqual(every(arr2,isNum), false, 'isNum');

//009
function assertArraysEqual(actual, expected, testName) {
  var actual = JSON.stringify(actual);
  var expected = JSON.stringify(expected);
  
  if (actual===expected){
    console.log('Passed');
  } else {
    console.log ('Failed [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

// Your code under test:
function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray = newArray + callbackFunction(element);
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}

// Your calls to 'assertArraysEqual':
var arr1 = [0,1,2,3,4,5];
var arr2 = [0,1,8,27,64,125];
var arr3 = [0,1,2,3,4,5,6,7];
var arr4 = ['hi'];
var arr5 = [0,-1,-2,-3,-4,5];

function cube(element){
  return Math.pow(element,3);
}

assertArraysEqual(map(arr1,cube),cubeAll(arr1), 'cubeAll');
assertArraysEqual(map(arr2,cube),cubeAll(arr1), 'cubeAll');
assertArraysEqual(map(arr3,cube),cubeAll(arr1), 'cubeAll');
assertArraysEqual(map(arr4,cube),cubeAll(arr1), 'cubeAll');
assertArraysEqual(map(arr5,cube),cubeAll(arr1), 'cubeAll');

//010
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  
  if (actual===expected){
    console.log('Passed');
  } else {
    console.log ('Failed [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

// Your code under test:
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj['lastName'];
 
  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }
  return obj;
}

// Your calls to 'assertObjectsEqual':
var obj = {firstName:'hi', lastName:'master'};
var exobj = {firstName:'hi',lastName:'master',fullName:'hi master'};
assertObjectsEqual(addFullNameProp(obj), exobj, '[addfullnameprop]');

//011
function average(numbers) {
  return sum(numbers)/numbers.length;
}

function sum(numbers) {
  var sum = 0;
  for (var i =0;i<numbers.length;i++){
    sum+=numbers[i];
  }
  return sum;
}

function assertEqual(actual, expected, testName){
   if (actual===expected){
    console.log('Passed');
  } else {
    console.log ('Failed [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var n = [1,2,3,4,5,6];
var n2 = [0,0,0];
var n3 = ['yes',0,0];
var n4 = [[1,2,3,4],0];
var n5 = [6,5,4,3,2,1];

assertEqual(sum(n),21,'sum');
assertEqual(average(n),21/6,'avg');
assertEqual(average(n2),0,'avg');
console.log(Number.isNaN(average(n3)));
console.log(Number.isNaN(average(n4)));
assertEqual(average(n5),21/6,'avg');

//012
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList, low, high) {
  return classList.map(function(name){
    var obj={name: name};  
    obj['age'] = getRandomIntInclusive(low,high);
    return obj;
  })
}

function assertInRange (low,high,actual, testName){
  for (var i=0;i<actual.length;i++){
    var e = actual[i].age;
    var inRange = e>=low && e<=high;
    if(!inRange){
      console.log('FAILED [' + testName + '] '+ actual + 'not in range'); return;
    } 
  }
  console.log('passed [' + testName + ']'); 
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var low = 10;
var high = 11;
var actual = decorateClassListWithAges(classList, low,high);
assertEqual(Array.isArray(actual), true, 'returns an array');
assertInRange(low, high, actual, 'add ages to student list between '+low +' and '+high);

//013
function isIsogram(text) {
  const setA = new Set(text.toLowerCase());
  return setA.size===text.length;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var s1 = 'abcdelkasdja';
var s2 = 'abcdefghijkl';
var s3 = '';
var s4 = 'abcdeFGHiJKL';

assertEqual(isIsogram(s1), false, 'isIsogram');
assertEqual(isIsogram(s2), true, 'isIsogram');
assertEqual(isIsogram(s3), true, 'isIsogram');
assertEqual(isIsogram(s4), true, 'isIsogram');

//014
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var ct={};
  var max = 0;
  
  var letters = word.split('').map(function(char){
    var key = char.toLowerCase();
    ct[key]? ct[key]++: ct[key]=1;
    if(ct[key] > max){ 
      max = ct[key]; 
    }
  });
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  var words = text.split(' ');
  for (var i in words){
      var repeatCountForWord = findMaxRepeatCountInWord(words[i]);
      if (repeatCountForWord > maxRepeatCountOverall){
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = words[i];
      }
  }
  return wordWithMaxRepeatCount;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var w1 = 'magical';
var w2 = 'squeegees';
var s1 = 'My favorite cars are Poseidon and Taurus';

assertEqual(findMaxRepeatCountInWord(w1),2,'maxrepeat in word');
assertEqual(findMaxRepeatCountInWord(w2),4,'maxrepeat in word');
assertEqual(findFirstWordWithMostRepeatedChars(s1),'Poseidon','first word with max repeat count');

//015
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string+=this.parenthesize(this.getAreaCode())+' '; 
  string+=this.getExchangeCode()+'-';
  string+=this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0,3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6,10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

function assertEqual(actual, expected, testName) {
  if (actual !== expected) {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  } else {
    console.log('PASSED [' + testName + ']');
  }
}

var n1 = new PhoneNumberFormatter([6,4,6,5,9,8,5,8,3,7]);
assertEqual(n1.render(), '(646) 598-5837', 'phone number formatter');

//016
function findLongestPalindrome(sentence) {
  // split sentence into words
  var words = sentence.split(' ');
  words = words.filter(isPalindrome).sort(sortAscendingByLength);
  return words.pop();
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  var alpha = /^[a-z]+$/;
  word = word.toLowerCase();
  return word === reverseString(word) &&
    word.match(alpha);
}

function sortAscendingByLength(a, b) {
  return (a.length-b.length); 
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
  	console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(findLongestPalindrome('hihi whatahw issi thissiht ??????????????'), 'thissiht', 'longest palindrome in sentence');

//017
function designerShoes (designer, shoes){
  return shoes.map(function(shoe){
    return [designer, shoe.name, shoe.price].join(', ');
  });
}

function genDesc(shoeList){
  return designerShoes(shoeList.name, shoeList.shoes).join('\n');
}

function genInventory(inventory){
  return inventory.map(function(item){
    return genDesc(item);
  });
}

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var one = currentInventory[0];
var designer = one.name;
var shoes = one.shoes;
var right = ["Brunello Cucinelli, tasselled black low-top lace-up, 1000", "Brunello Cucinelli, tasselled green low-top lace-up, 1100", "Brunello Cucinelli, plain beige suede moccasin, 950", "Brunello Cucinelli, plain olive suede moccasin, 1050"];

assertEqual(designerShoes(designer,shoes), right, 'generate designer + shoes array');

right = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050";

assertEqual(genDesc(one), right, 'generate newline list descriptions');

right = ["Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050", "Gucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900"];
         
assertEqual(genInventory(currentInventory), right, 'generate descriptions for a given inventory list');

//018

function sum(prices){
  return prices.reduce(function(p1, p2){
    return p1 + p2;
  });
}

function avg(prices){
  return sum(prices)/prices.length;
}

function getPriceList (shoeList){
  return shoeList.shoes.map(function(shoe){
    return shoe.price;
  });
}

function getDesignerAvg (shoeList) {
  return {
    name: shoeList.name,
    averagePrice: avg(getPriceList(shoeList))
  }
}

function renderAvgInv(inventory){
  return {designers: inventory.map(getDesignerAvg)};
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var numbers = [1,2,3,4,5,6,7,8,9,10];
assertEqual(sum(numbers), 55, 'sum');
assertEqual(avg(numbers), 5.5, 'avg');

var shoes1 = inventory[0];
assertObjectsEqual(getPriceList(shoes1), [1000,1100,950,1050], 'get shoe price list');
assertObjectsEqual(getDesignerAvg(shoes1),{name: 'Brunello Cucinelli', averagePrice: 1025}, 'get designer shoe price average' );

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

assertObjectsEqual (renderAvgInv(inventory), expected, 'render object containing designer name and avg prices');

//019
function getShoeDesc(shoeList){
  return shoeList.shoes.map(function(shoe){
    return shoe.name + ', ' + shoe.price;
  });
}

function matchColor(shoeList, color){
  return shoeList.filter(function(shoe){
    return shoe.includes(color);
  });
}

function renderInvList(inventory,color){
  return inventory.map(function(designerList){
    return matchColor(getShoeDesc(designerList), color).join('\n');
  });  
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var one = inventory[0];
var color = 'black';
var right= ["tasselled black low-top lace-up, 1000", "tasselled green low-top lace-up, 1100", "plain beige suede moccasin, 950", "plain olive suede moccasin, 1050"];

assertObjectsEqual(getShoeDesc(one), right, 'get shoe descriptions for a designer');

var desc = getShoeDesc(one);
right = ["tasselled black low-top lace-up, 1000"];
  
assertObjectsEqual(matchColor(desc,color), right, 'returns shoe desc if color match');

right = ["tasselled black low-top lace-up, 1000", "black leather laced sneakers, 900"];

assertObjectsEqual(renderInvList(inventory,color), right,'renders list of inventory matching color');

//020
function getShoes(inventory){
  return inventory.reduce(function(designer, shoeList){
    return designer.concat(shoeList.shoes);
  }, []);
}

function getShoeDesc(shoeList){
  return shoeList.map(function(shoe){
    return shoe.name;
  });
}

function wordObj(shoe, query){
  var words = shoe.split(' ');
  return {
      'nameWords': words,
      'targetWordIndex': Number(locate(words,query))
  };
}

function locate(wordArray, query){
  for(var i in wordArray){
    var word = wordArray[i];
    if (word.indexOf(query)===0){ 
      return i; 
    }
  }
}

function containsQuery(description, query){
  return description.indexOf(query)>=0;
}

function renderMatchList(inventory,query){
  var shoeDesc = getShoeDesc(getShoes(inventory));
  var result = [];
  for (var i in shoeDesc){ 
    var shoe = shoeDesc[i];
   
    if (containsQuery(shoe,query)){
      result.push(wordObj(shoe,query));
    }
  }
  return result;
}
  
function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
      console.log('passed [' + testName + ']');
    } else {
      console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
 }
  
  var inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
  
  var expected = [
    {
      "nameWords": [
        "tasselled",
        "black",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "tasselled",
        "green",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "red",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    },
    {
      "nameWords": [
        "black",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    }
  ];
  
  var query = 'lace';
  assertObjectsEqual(renderMatchList(inventory, query), expected, 'array of objects containing all words matching query and index of match');
