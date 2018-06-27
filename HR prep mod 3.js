//MODULE 3 
//001 Flipper
function flipPairs(string){
  var len = string.length;
  var out = '';
  
  for (var i=0; i<len;i+=2){
    if (string[i+1]!=undefined){
              out+=string[i+1];}
    out+=string[i];
    }
  
  if (len!=0){
    out+=string.slice(-1,1);
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

