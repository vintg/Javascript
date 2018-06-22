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