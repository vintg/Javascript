//MODULE 3 
//001 Flipper
function flipPairs(string){
  var out = '';
  for (var i=1;i < string.length; i+=2){
    out+=string[i]+string[i-1];
  }
  if (string.length%2!==0){
    out+= string.slice(-1);
  }
  return out;
}

function assertEqual (actual, expected, testName){
  if (actual===expected){
    console.log('PASSED');
  }
  else{ 
  console.log('FAILED ['+testName+'] expected:\n'+expected+'\nbut got: \n'+actual);
  }
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);

var expected = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';
assertEqual (output, expected, 'flip every pair of char in a string');

//002 Big Flipper
function assertValidInput(string, n){
  return n>1 && typeof string ==='string';
}

function flipEveryNChars(s, n){
  var out = '';
  for (var i =0; i<s.length;i+=n){
    out+=reverseStr(s.slice(i,i+n));
  }
  return out;
}

function reverseStr(s){
  return s.split('').reverse().join('');
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
function detectOutlierValue(numString){
  var nums = numArray(numString);
  
  var type = 'even';
  if (majorityType(nums)>1){
    type = 'odd';
  } 
  return oddNumOut(nums, type)+1;
}

function majorityType(numArray){
  return numArray.reduce(function(sum, num){
    return sum+=num%2;
  }, 0);
}

function oddNumOut(numArray, type){
  for (var i =0; i<numArray.length;i++){
    if (type==='odd' && numArray[i]%2===0){
      return i;
    } 
    else if (type==='even' && numArray[i]%2!==0){
      return i;
    }
  }
}

function numArray(string){
  return string.split(' ').map(function(char){
    return Number(char);
  });
}

function assertEqual(actual, expected, testName){
  if (actual===expected){
    console.log('PASSED');
  } else {
    console.log("FAILED ["+ testName+'] expected: '+expected + ', but got: '+actual);
  }
}

var evens = "2 4 7 8 10"; // => 3 - Third number is odd, while the rest of the numbers are even
var odds = "1 10 1 1";  //=> 2 - Second number is even, while the rest of the numbers are odd

var actual = detectOutlierValue(evens);
expected = 3;
assertEqual(actual, expected, 'find index of minority even-odd number in string');

actual = detectOutlierValue(odds);
expected = 2;
assertEqual(actual, expected, 'find index of minority even-odd number in string');

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

//005
function findPairForSum (array, targetSum){
  var dA = differenceArray(array, targetSum);
  return checkSum(array, dA, targetSum);
}

function differenceArray(array,targetSum){
  return array.map(function(element){
    return targetSum - element;   
  });
}

function matchingPairExists(array, diffArray){
  return diffArray.map(function(num){
    return array.includes(num);
  })
}

function checkSum(array, diffArray, targetSum){
  var pairList = matchingPairExists(array, diffArray);
  if(pairList.includes(true)){
    var idx=  pairList.indexOf(true);
    return [array[idx], targetSum - array[idx]]; 
  } else{
    console.log('no matching pair found');
  }
}

function assertObjectsEqual(actual, expected, testName){
  var actual = JSON.stringify(actual);  
  var expected = JSON.stringify(expected);
  if(actual ===expected){
    console.log('PASSED');
  } else {
    console.log('FAILED [' + testName + '] expected:\n'+expected+'\nbut got:\n'+actual);
  }
}

var array = [3, 34, 4, 12, 5, 2];
var targetSum = 9;

var actual = findPairForSum(array, targetSum);
var expected = [4,5];
assertObjectsEqual(actual,expected, 'find pair of numbers that sum to the target number');

targetSum = 7;
actual = findPairForSum(array,targetSum);
expected = [3,4];
assertObjectsEqual(actual,expected, 'find pair of numbers that sum to the target number');

targetSum = 1;
actual = findPairForSum(array,targetSum);
expected = undefined ;
assertObjectsEqual(actual,expected, 'find pair of numbers that sum to the target number');

//006 rotate this
function locate(string, char){
  return string.indexOf(char);  
}

function isRotated(str1, str2) {
  var char1 = str1.charAt(0);
  var idx = locate(str2, char1);
  var rotate = str2.slice(idx).concat(str2.slice(0,idx));
  console.log(rotate);
  return str1 ===rotate;
}

function assertEqual(actual,expected,testName){
  if (actual===expected){
    console.log('PASSED');
  } else {
    console.log('FAILED [' + testName +'] expected: \n'+expected+'\bbut got:\n'+actual);
  }
}

var str1= 'hello world';
var str2= 'orldhello w';

var actual = isRotated(str1, str2);
var expected = true;

assertEqual(actual, expected, 'one string is a rotated version of another');

//007
function getMid(array){
  return Math.floor(array.length/2);
}

function search(array, value) {
  
  var iter = 0;
  var slice = array.slice(0);
  var midpt = getMid(slice);
  
  while (midval!=value && iter <10){
    iter++;
    var midval = array[midpt];
 
    if (midval > value){
      slice = array.slice(0,midpt);
      midpt = getMid(slice);
    }
    else if(midval < value){
      slice = array.slice(midpt);
      midpt += getMid(slice);
    }
    else{
      return midpt;
    }
  }
}

function assertEqual(actual,expected,testName){
  if (actual===expected){
    console.log('PASSED');
  } else {
    console.log('FAILED [' + testName +'] \nexpected: '+expected+' but got: '+actual);
  }
}

var sortedArray = [1, 3, 16, 22, 31, 33, 34];

for (var i in sortedArray){
  var value = sortedArray[i];
  var expected = Number(i); 
  
  var actual = search(sortedArray, value);
  assertEqual ( actual, expected, 'find index of value '+value+ ' in sorted array');
}

