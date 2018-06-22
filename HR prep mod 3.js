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
