// a/A prep
// 7/11/18

  function anagrams(s1,s2){
    return s1.split('').sort().toString() === s2.split('').sort().toString();
  }
  
  function isogram_matcher(i1,i2){
    //check len =
    const s1 = new Set(i1);
    const s2 = new Set(i2);
  
    for (var i in s1.size){
      if (s2.has(s1[i])===false){
        return false;
      }
    }
    return true; 
  }

  function rem(s,n){
    var ar =s.split('');
    ar.splice(n,1);
    return ar.join('');
  }
  
  function bigram(s){
    words = s.split(' ');
    var max = 0;
    var bigstring='';
    for (var i=0;i< words.length - 1;i++){
      var s2 = words[i]+' '+words[i+1];
      if (s2.length > max) { max = s2.length; bigstring = s2;}
    }
    return [bigstring, max];
  }
  
  function xbonacci(array, n){
    const summation=(add, sum) => add + sum;
    var len = array.length;
    for (var i =0; i< n-len;i++){
      var slice = array.slice(i);
      array.push(slice.reduce(summation));
    }
    return array;
  }
  
  function find_divisors(n){
    var out = [];
    for (var i =1; i<= n;i++){
      if (n%i===0){
        out.push(i);
      }
    }
    return out;
  }
  
  function abundant(n){
    var divisors = find_divisors(n);
    const summation=(add, sum) => add + sum;
    return divisors.reduce(summation) > n;
  }
  
  function gcf(n1,n2){
    var d1 = find_divisors(n1).sort(function(a,b){return b-a});
    var d2 = find_divisors(n2).sort(function(a,b){return b-a});
  
    if (n1 > n2){
      for (var i =0;i< d1.length;i++){
        if (d2.includes(d1[i])){
          return d1[i];
        }
      }
    } else{
      for (var i =0;i< d2.length;i++){
        if (d1.includes(d2[i])){
          return d2[i];
        }
      }
    }  
  }

  function wordWithMostRepeats(sentence){
    var words = sentence.split(' ');
    var ct = {};
    var max = 1;
    for (var i in words){
      var key = words[i]; 
      if (ct.hasOwnProperty(key)){
        ct[key]++; 
        if(ct[key] > max){
          max = ct[key];
        }
      } else{
        ct[key] =1;
      }
    }
    return max;
  }

  
function platin(words){
    var vowels = 'aeiou'.split('');
    return words.map(function(word){
      for (var i in word){
        if (vowels.includes(word[i])){
          var slice = word.slice(i);
          var front = word.slice(0,i);
          break;
        }
      }
      return slice + front + 'ay';
    });
  }
  function pigLatin(sentence){
    var words =sentence.split(' ');
    return platin(words).join(' ');
  }

  function first_last_idx(str){
    var idxHash = {};
    var rev = str.split('').reverse().join(''); 
    for (var i in str){
      var key= str[i];
      idxHash[key] = [str.indexOf(key), str.length - rev.indexOf(key)];
    }
  return idxHash;
  }

  function wordplay(s1,s2){
    //var s1 = s1.split('');
    //var s2 = s2.split('');
  
    var idx =[];
    for (var i in s2){
      var charidx = s1.indexOf(s2[i]);
      if (charidx >-1){
        idx.push(charidx);
      }
      else{return false;}
    }
    return idx;
  }

  function narcNum(n){
    var digits = n.toString().split('');
    var sum = 0;
    for (var i in digits){
      sum+=Math.pow(Number(digits[i]), digits.length);
    }  
    return n===sum;
  }

  function collatz(n){
    var ct = 0;
    while (n>1){
      ct++;
      if (n%2==0){n=.5*n;}
      else { n=n*3 + 1;}
    }
  return ct+1;
  }
  
  function longestCollatz(){
    var max = 0;
    var n =1000000;
    for (var i=1000000; i>0;i--){
      var c = collatz(i);
      if (c> max){
        max = c;
        n = i;
      }
    }
    return [n,max];
  }

var input = [2,8,6,4,5,5];
var target = 10;

function idxSumPairs(array,target){
  var out = [];
  if(array.length>1){
    for (var i =0; i<array.length;i++){
      for (var j=i+1; j<array.length; j++){
        if (array[i] + array[j]===target){
          out.push([i,j]);
        }
      }
    }
    return out;
  } else{
    return 'No pairs found.';
  }
}

console.log(idxSumPairs(input,target));

function nthPrime(n){
  var ct=0;
  var i =1;
  while (ct<n){
    i++;
    if(isPrime(i)){
      ct++;
    }
  }
  return i;
}

function isPrime(n){
  if (n<2){return false;}
  for (var i =2;i<n;i++){
    if (n%i===0){return false;}
  }
  return true;
}

function sumPropDiv(n){
  var pD = [];
  for (var i=0;i<n;i++){
    if (n%i===0){
      pD.push(i);
    }
  }
  return sumAr(pD);
}

function sumAr(array){
  return array.reduce(function(n,sum){
    return sum+n;
  },0);
}

function amicable(n1,n2){
  if ((sumPropDiv(n1)===n2)&& (sumPropDiv(n2)===n1)){
    return true;
  } else{
  return false;
  }
}

function sum10kami(){
  
  var out = [];
  for (var i =0;i< 10000;i++){
   var z = sumPropDiv(i);
    if (z<10000){
      out.push(i);
    }
   }
  let set = new Set(out);
  let array = Array.from(set);
  console.log(sumAr(array));
}

function gpf(n){
  var k = 1;
  var iter=  0;
 
  while(k<n){ 
    k = nextPrime(k);
    n = reduce(n,k);
  }
  
  return k;
}

function reduce(n,x){
  while(n%x===0){
    n/=x;
  }
  return n;
}

function nextPrime(n){
  var i = n+1;
  while(!isPrime(i)){
    i++;
  }  
  return i;
}

function isPrime(n){
  if (n<2){return false;}
  for (var i =2;i<n;i++){
    if (n%i===0){return false;}
  }
  return true;
}

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}



