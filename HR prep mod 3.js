//MODULE 3 
//001 Flipper
function flipPairs(input){
  var str = '';
  for (var i =1; i<input.length;i+=2){
    str+=input[i];
    str+=input[i-1];
  }
  if (input.length%2!=0){ str+=input[input.length-1];}
  return str;
}

//Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> 

var expected = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';

function assertEqual(actual, expected, testName){
  if (actual===expected){
    console.log ('PASSED');
  } else{
    console.log('FAILED [' + testName + '] -> expected: \n'+expected + '\nbut got: \n'+actual);
  }
}

assertEqual(output,expected, 'flip position of every adjacent pair of characters in a string');

//002 Big Flipper
function assertValidInput(string, n){
  return n>1 && typeof string ==='string';
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function flipEveryNChars(string, n){
  var m = string.length;
  var r = m%n;
  
  var out= '';
  for(var i = 0; i<m;i+=n){
     out+= reverseString(string.slice(i,i+n)); 
  }
  out+= string.slice(m-r,m);
  return out;
}

function assertEqual(actual, expected, testName){
  if (actual===expected){
    console.log('PASSED');
  } else { 
    console.log('FAILED [' + testName + '] expected: \n'+expected + '\n but got:\n'+actual);
  }
}

// TEST INPUT
var input = 'a short example'; 
var n = [3,5];
var expected = ['s arohe tmaxelp', 'ohs axe trelpma']; 
//
for (var _ in n){
  main(input, n[_], expected[_]);
}

function main(input, n, expected){
  if (assertValidInput(input,n)){
    var output = flipEveryNChars(input, n);
    assertEqual(output, expected, 'reverse every n char in a string');
  } else{
    console.log('Input(s) not valid');
  }
}

//003
evens = "2 4 7 8 10"; // => 3 - Third number is odd, while the rest of the numbers are even

odds = "1 10 1 1";  //=> 2 - Second number is even, while the rest of the numbers are odd

var actual = detectOutlierValue(evens);
expected = 3;
assertEqual(actual, expected, 'find index of minority even-odd number in string');

actual = detectOutlierValue(odds);
expected = 2;
assertEqual(actual, expected, 'find index of minority even-odd number in string');

function assertEqual(actual, expected, testName){
  if (actual===expected){
    console.log('PASSED');
  } else {
    console.log ('FAILED [' + testName + '] expected: \n'+ expected + '\bbut got:\n'+actual);
  }
}

function detectOutlierValue(numString){
  var numbers = numString.split(' ');
  var type = majorityType(numbers);
  return oddNumberOut(numbers, type);
}

function majorityType(numbers){
  var ct = 0;
  for (var n =0 ;n<3; n++){
    ct+= isEven(Number(numbers[n]));
  }
  return ct>1 ? 0: 1; 
}

function isEven(number){
  return Math.abs(number)%2==0;
}

function oddNumberOut(numbers, type){
  var idx = 1;
  for (var i in numbers){
    var n = Number(numbers[i]);
    
    if (type===1 && isEven(n)===true){
        return idx;
    } else if (type===0 && isEven(n)===false){
        return idx;
    }
    idx++;
  }
}

//004 transpose
function compareLen(str1,str2){
  return (str1.length>str2.length);
}

function getCharArrays(str){
  return str.split('');
}

function padSpace(strArr, n){
  for (var i =0; i<n;i++){
    strArr.push(' ');
  }
  return strArr;
}

function transposeTwoStrings(str1, str2){
  var n = 0;
  var str1 = getCharArrays(str1);
  var str2 = getCharArrays(str2);
  
  if (compareLen(str1, str2)){
    n = str1.length - str2.length;
    str2 = padSpace(str2, n);
  } else {
    n = str2.length - str1.length;
    str1 = padSpace(str1, n);
  }
  
  var out = '';
  
  for (var i= 0; i<str1.length;i++){
    out+= '\n'+str1[i]+' '+str2[i];
  }
  return out;
}

function assertObjectsEqual (actual, expected, testName){
  var actual = JSON.stringify(actual);
  var expected = JSON.stringify(expected);
  
  if (actual===expected){
    console.log('PASSED');
  } else {
    console.log('FAILED [' + testName + '] expected: \n'+expected + '\nbut got:\n'+actual);
  }
}

var str1 = 'Hello';
var str2 = 'World';

var actual = transposeTwoStrings(str1,str2);
var expected = "\nH W\ne o\nl r\nl l\no d";
assertObjectsEqual(actual, expected, 'transpose two strings');