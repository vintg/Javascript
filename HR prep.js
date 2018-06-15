/* VTG 
6-12-18
HackReactor Prep */

//MODULE 0
// 001
function transformFirstAndLast(array) {
    var first = array[0];
    var last = array[array.length-1];
    var obj={};
    obj[first] =last;
    return obj;
  }

// 002
function getAllKeys(obj){
  var array =[];
  for (var k in obj ){
    if (obj.hasOwnProperty(k)){
      array.push(k);  
    }
  } 
  console.log(array);
  return array;
}

//003
function fromListToObject(array) {
    var obj={};
    for (var e in array){
        var key = array[e][0];
        var val = array[e][1];
        obj[key] = val;
    }
    return obj;
  }

 //004
 function listAllValues(obj) {
    var out=[];
    for (var k in obj){
      out.push(obj[k]);  
    }
    return out;
 }

 //005
 function transformEmployeeData(array) {
    var out=[];
    for (var e in array){
      var obj = {};
      var pairs = array[e];
     
      for (var p in pairs){
        var key = pairs[p][0];
        var val = pairs[p][1];
        obj[key]=val;
      }  
      
      out.push(obj);
    }
    return out;
  }

  //006
  function convertObjectToList(obj) {
    var out = [];
    console.log(obj);
    for (var k in obj){
      out.push([k, obj[k]]);
    }
    return out;
  }
  
  //007
  function greetCustomer(firstName) {
    var greeting = '';
    
    if(customerData.hasOwnProperty(firstName)){
      var visit = (customerData[firstName].visits);
    }
    
    if(visit==1){
       greeting = 'Welcome back, '+firstName+'! We\'re glad you liked us the first time!'; 
    }
    else if (visit > 1){
       greeting  = 'Welcome back, '+firstName+'! So glad to see you again!'; 
    }
    else {
       greeting = 'Welcome! Is this your first time?'; 
    }

    return greeting;
  }

// MODULE 1 *************************************************

  //001
  function isOldEnoughToDrink(age) {
    return age>=21
  }

  //002
  function isOldEnoughToDrive(age) {
    return age>=16;
  }

  //003
  function isOldEnoughToVote(age) {
    return age>=18;
  }

  //004
  function isOldEnoughToDrinkAndDrive(age) {
    return false;
  }

  //005
  function getProperty(obj, key) {
    return obj[key];
  }

  //006
  function addProperty(obj, key) {
    obj[key] = true;
  }

  //007
  function removeProperty(obj, key) {
    delete obj[key];
  }

  //008
  function checkAge(name, age) {
    var msg = 'Welcome, '+ name +'!'; 
    if (age<21) { 
      msg = 'Go home, '+ name +'!';
    }
    return msg;
  }

  //009
  function getFullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
  }

  //010
  function getLengthOfWord(word) {
    return word.length;
  }

  //011
  function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
  }

  //012
  function isGreaterThanTen(num) {
    return num > 10;
  }

  //013
  function isLessThan30(num) {
    return num < 30;
  }

  //014
  function equalsTen(num) {
    return num===10;
  }

  //015
  function isLessThan(num1, num2) {
    return num2 < num1;
  }

  //016
  function isGreaterThan(num1, num2) {
    return num2 > num1;
  }

  //017
  function isEqualTo(num1, num2) {
    return num1 === num2;
  }

  //018
  function isEven(num) {
    return num%2===0;
  }

  //019
  function isOdd(num) {
    return num %2!==0;
  }

  //020
  function isSameLength(word1, word2) {
    return word1.length===word2.length;
  }

  //021
  function areBothOdd(num1, num2) {
    return (num1%2!==0 && num2%2!==0);
  }

  //022
  function isEitherEven(num1, num2) {
    return (num1%2===0 || num2%2===0);
  }

  //023
  function isOddLength(word) {
    return word.length%2!==0;
  }

  //024
  function isEvenLength(word) {
    return word.length%2===0;
  }

  //025
  function isEvenAndGreaterThanTen(num) {
    return (num%2===0 && num>10);
  }

  //026
  function average(num1, num2) {
    return .5*(num1+num2);
  }

  //027
  function computeAreaOfATriangle(base, height) {
    return .5*(base*height);
  }

  //028
  function cube(num) {
    return Math.pow(num,3);
  }

  //029
  function square(num) {
    return Math.pow(num,2);
  }

  //030
  function computeAverageLengthOfWords(word1, word2) {
    return .5*(word1.length + word2.length);
  }

  //031
  function addFullNameProperty(obj) {
    obj.fullName = obj.firstName +' ' + obj.lastName;
  }

  //032
  function addObjectProperty(obj1, key, obj2) {
    obj1[key] = obj2; 
  }

  //033
  function isPersonOldEnoughToDrinkAndDrive(person) {
    return false;
  }

  //034
  function isPersonOldEnoughToDrive(person) {
    return person.age>=16;
  }

  //035
  function isPersonOldEnoughToVote(person) {
    return person.age >=18;
  }

  //036
  function isPersonOldEnoughToDrink(person) {
    return person.age>=21;
  }

  //037
  function addArrayProperty(obj, key, arr) {
    obj[key]=arr; 
  }

  //038
  function getNthElement(array, n) {
    return array[n];
  }
  //039
  function getFirstElement(array) {
  return array[0];
  }
  //040
  function getLastElement(array) {
    return array[array.length-1];
  }
  //041
  function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
  }
  //042
  function addToBack(arr, element) {
    arr.push(element);
    return arr;
  }
  //043
  function computeAreaOfARectangle(length, width) {
    return length*width;
  }
  //044
  function computePerimeterOfARectangle(length, width) {
    return 2*(length+width);
  }
  //045
  function computePerimeterOfATriangle(side1, side2, side3) {
    return side1+side2+side3;
  }
  //046
  function computeTripledAreaOfARectangle(length, width) {
    return 3*length*width;
  }
  //047
  function computePerimeterOfACircle(radius) {
    return 2*Math.PI*radius;
  }
  //048
  function computeAreaOfACircle(radius) {
    return Math.PI * Math.pow(radius,2);
  }
  //049
  function computePower(num, exponent) {
    return Math.pow(num,exponent);
  }
  //050
  function computeSquareRoot(num) {
    var est = num/2;
    var err = Math.abs(Math.pow(est,2)-num);
    
    while (err>.001){
      if (num/est > est){
        est+=.01;
      }
      else{
        est-=.01;
      }
      err = Math.abs(Math.pow(est,2)-num);
    }
    return est;
  }

  // ** alt NR method
  function computeSquareRoot(num) {
    var xi = (num+1)/2;
    var iter=0;
    var fx = Math.pow(xi,2)-num;
    
    console.log('target = ' +num);
    while (Math.abs(fx)>1e-4 && iter<100){
      console.log(xi, Math.pow(xi,2));
      xi= xi -fx/(2*xi);
      fx = Math.pow(xi,2)-num;
      iter++;
    }
    return xi;
  }
  //051
  function doubleSquareRootOf(num) {
    return 2 * Math.sqrt(num);
  }
  //052
  function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length+word2.length+word3.length;
  }
  //053
  function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  //054
  function getElementsAfter(array, n) {
    return array.slice(n+1,array.length);
  }
  //055
  function getElementsUpTo(array, n) {
    return array.slice(0,n);
  }
  //056
  function getAllElementsButFirst(array) {
    return array.slice(1,array.length);
  }
  //057
  function getAllElementsButLast(array) {
    return array.slice(0,array.length-1);
  }
  //058
  function removeFromFront(arr) {
    arr.shift();
    return arr;
  }
  //059
  function removeFromBackOfNew(arr) {
    return arr.slice(0,arr.length-1);
  }

  //060
  function removeFromFrontOfNew(arr) {
    return arr.slice(1,arr.length);
  }
  //061
  function countCharacter(str, char) {
    var ct=0;
    for (var i=0;i<=str.length;i++){
      if (str.charAt(i)===char){
        ct++;
      }
    }
    return ct;
  }
  //062
  function getAllLetters(str) {
    var alpha = /^[a-z]+$/;
    var array=[];
    for (var i =0;i<=str.length;i++){
      if (str.charAt(i).toLowerCase().match(alpha)){
    array.push(str.charAt(i));     
      }
    }
    return array;
  }
  //063
  function getAllWords(str) {
    if (str===''){
      return [];
    } 
    var arr =str.split(' ');
    return arr;
  }
  //064
  function countWords(str) {
    var obj ={};
    if (str===''){
      return obj;  
    }
    var keys = str.split(' ');  
    console.log(str); 
    for (var k in keys){
      var key = keys[k];
      if (obj.hasOwnProperty(key)===false){
        obj[key] = 1;
      }
     else{
       obj[key] +=1;
     }
    }
    console.log(obj);
    return obj;
  }
  //065
  function removeFromBack(arr) {
    arr.pop();
    return arr;
  }

  //066
  function or(expression1, expression2) {
    var o = false;
    if (expression1){
      o=true;
    }
    if (expression2){
      o=true;
    }
    return o;
  }
  
  //067
  function isEitherEvenOrAreBoth7(num1, num2) {
    return num1%2===0 ||num2%2===0 || (num1===7 && num1===num2);
  
  }
  //068
  function isEitherEvenAndLessThan9(num1, num2) {
    return (num1%2===0 || num2%2===0) && (num1<=9 && num2<=9);
  
  }
  //069
  function extend(obj1, obj2) {
    for (var k2 in obj2){
      var key = k2;
      if (obj1.hasOwnProperty(key)===false){
        obj1[key] = obj2[key];
      }
    } 
  }
  //070
  function removeNumbersLargerThan(num, obj) {
    for (var k in obj){
      if(obj[k]>num){
        delete obj[k];
      }
    }
  }
  //071
  function removeNumbersLessThan(num, obj) {
    for (var k in obj){
      if (obj[k] < num) {
        delete obj[k];
      }
    }
  }
  //072
  removeStringValuesLongerThan(num, obj) {
    for (var k in obj){
      if(obj[k].length >num){
        delete obj[k];
      }
    }
  }
  //073
  function removeEvenValues(obj) {
    for(var k in obj){
      if (obj[k]%2===0){
        delete obj[k];
      }
    }
  }
  //074
  function countNumberOfKeys(obj) {
    var ct=0;
    for(var k in obj){
      ct++;
    }
    return ct;
  }
  //075
  function removeOddValues(obj) {
    for (var k in obj){
      if (obj[k]%2!==0) {
        delete obj[k];
      }
    }
  }
  //076
  function removeArrayValues(obj) {
    for (var k in obj){
      if (Array.isArray(obj[k]) ){
        delete obj[k];
      }
    }
  }
  //077
  function removeNumberValues(obj) {
    for (var k in obj){
      if (typeof obj[k]==='number'){
        delete obj[k];
      }
    }
  }
  //078
  function removeStringValues(obj) {
    for (var k in obj){
     if (typeof obj[k]==='string'){
       delete obj[k];
     }
   }
 }
 //079
 function convertDoubleSpaceToSingle(str) {
  return str.split('  ').join(' ');
}
//080
function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2.concat(arr3));
}
//081
function addToFrontOfNew(arr, element) {
  var out = arr.slice(0);
  out.unshift(element);
  return out;
}
//082
function addToBackOfNew(arr, element) {
  var out = arr.slice(0);
  out.push(element);
  return out;
}
//083
function getAllElementsButNth(array, n) {
  var out =array.slice(0);
  
  if (n <array.length && n>=0){
    out.splice(n,1);
  }
  return out;
}
//084
function areValidCredentials(name, password) {
  return name.length>3 && password.length >=8;
}
//085
function getIndexOf(char, str) {
  var idx=-1;
  for (var i=0;i<=str.length;i++){
    if (str.charAt(i)===char){
      return i;
    }
  }
  return idx;
}
//086
function findMinLengthOfThreeWords(word1, word2, word3) {
  return Math.min(word1.length,word2.length,word3.length);
}
//087
function findMaxLengthOfThreeWords(word1, word2, word3) {
  return Math.max(word1.length,word2.length,word3.length);
}
//088
function getElementsThatEqual10AtProperty(obj, key) {
  var out = [];
  if (Array.isArray(obj[key])){
    for (var v in obj[key]){
      var ten = obj[key][v];
      if(ten===10){out.push(ten);}
    }
  }
 return out;
}
//089
function select(arr, obj) {
  var out={};
  for (var e in arr){
    if (obj.hasOwnProperty(arr[e])){
      var val = obj[arr[e]];
      out[arr[e]] = val;
    }
  }
  return out;
}
//090
getElementsLessThan100AtProperty(obj, key) {
  var out=[];
  if (obj.hasOwnProperty(key)){
    for (var k in obj[key]){
      var val = obj[key][k];
      console.log(val);
      if (val<100){
        out.push(val);
      }
    }
  }
  return out;
}
//091
function countAllCharacters(str) {
  var out={};
  console.log('str = '+str);
 
  for (var i = 0; i<str.length; i++){
   var key = str.charAt(i);
    if (out.hasOwnProperty(key)){
      out[key]++; 
    }
    else {
      out[key]=1;
    }
  }
  return out;
}
//092
function getElementsGreaterThan10AtProperty(obj, key) {
  var out = [];
  for (var e in obj[key]){
    var val = obj[key][e]
    if (val >10) {
      out.push(val);
    }
  }
  return out;
}
//093
function removeElement(array, discarder) {
  var out=[];
  console.log(discarder);
    for (var i in array){
      if(array[i]!==discarder){
        out.push(array[i]);
      }
    }
  return out;
}
//094
function getFirstElementOfProperty(obj, key) {
  if (Array.isArray(obj[key])){
      return(obj[key][0]);  
    }
}
//095
function getNthElementOfProperty(obj, key, n) {
  if (obj.hasOwnProperty(key)){
    return obj[key][n];
  }
}
//096
function getLastElementOfProperty(obj, key) {
  if (obj.hasOwnProperty(key)){
    var arr = obj[key];
    if (Array.isArray(arr)){
      return arr[arr.length-1];
    }
  }
}
//097
function keep(array, keeper) {
  var out=[];
  for (var i=0;i<array.length;i++){
    if (array[i]===keeper){
      out.push(array[i]);
    }
  } return out;
}
//098
function getOddLengthWordsAtProperty(obj, key) {
  var out = [];
 if ((Array.isArray(obj[key]))){
  for (var e in obj[key]){
    var string = obj[key][e];
    if (string.length%2!==0){   
      out.push(string);
    }
  }
 } return out;
}
//099
function computeAverageOfNumbers(nums) {
  var sum=0;
  for (var i =0;i<nums.length;i++){
    sum+=nums[i];
  }
  return nums.length===0 ? 0: sum/nums.length;
}
//100
function getAverageOfElementsAtProperty(obj, key) {
  var avg = 0;
  if (obj.hasOwnProperty(key)){
    var ele = obj[key];
    if (Array.isArray(ele) && ele.length>0){
      for (var i =0; i<ele.length;i++){
        avg+=ele[i];
      }
      avg /=ele.length;
    }
  }
  return avg;
}
//101
function getEvenLengthWordsAtProperty(obj, key) {
  var out = [];
  if (obj.hasOwnProperty(key)){
    var k = obj[key];
    if (Array.isArray(k)){
      for (var i=0;i<k.length;i++){
        if (k[i].length%2===0){
          out.push(k[i]);
        }
      }
    }
  }
return out;
}
//102
function filterOddLengthWords(words) {
 var out = [];
 for (var e =0;e<words.length;e++){
   if(words[e].length%2!==0){
     out.push(words[e]);
   }
 }
return out;
}
//103
function getSquaredElementsAtProperty(obj, key) {
  var out=[];
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])){
    var arr = obj[key];
   for (var i =0;i<arr.length;i++){
     out.push(Math.pow(arr[i],2));
   } 
  }
  return out;
}
//104
function getOddElementsAtProperty(obj, key) {
  var out = [];
   if (obj.hasOwnProperty(key)){
     var k = obj[key];
     if (Array.isArray(k)){
       for (var i=0;i<k.length;i++){
         if (k[i]%2!==0){
           out.push(k[i]);
         }
       }
     }
   }
 return out;
 }
//105
function getEvenElementsAtProperty(obj, key) {
  var out = [];
     if (obj.hasOwnProperty(key)){
       var k = obj[key];
       if (Array.isArray(k)){
         for (var i=0;i<k.length;i++){
           if (k[i]%2===0){
             out.push(k[i]);
           }
         }
       }
     }
   return out;
  }
//106
function filterEvenLengthWords(words) {
  var out = [];
 for (var e =0;e<words.length;e++){
   if(words[e].length%2===0){
     out.push(words[e]);
   }
 }
return out;
}
//107
function getLengthOfLongestElement(arr) {
  var max = 0;
  for (var i=0;i<arr.length;i++){
    var len = arr[i].length;
    if (len>max){
      max = len;
    }
  }
 return max;
}
//108
function getSmallestElementAtProperty(obj, key) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])){
    var min = obj[key][0];
    for(var e=0;e<obj[key].length;e++){
      if (obj[key][e]<min){
        min = obj[key][e];
      }
    }
  }
return min;
}
//109
function getLargestElementAtProperty(obj, key) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])){
    var max = obj[key][0];
    for(var e=0;e<obj[key].length;e++){
      if (obj[key][e]>max){
        max = obj[key][e];
      }
    }
  }
return max;
}
//110
function getAllButLastElementOfProperty(obj, key) {
  var out = [];
   if (obj.hasOwnProperty(key) && Array.isArray(obj[key])){
    out = obj[key].slice(0,obj[key].length-1);
   }
 return out;
 }
 //111
 function getElementOfArrayProperty(obj, key, index) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) 
     && index < obj[key].length){
  return obj[key][index];
  }
}
//112
function squareElements(arr) {
  var out=[];
  for (var i= 0;i<arr.length;i++){
    out.push(Math.pow(arr[i],2));  
  }
  return out;
}
//113
function filterOddElements(arr) {
  var out = [];
  for (var i=0; i<arr.length;i++){
    if (arr[i]%2!==0){
      out.push(arr[i]);
    }
  }
  return out;
}
//114
function computeProductOfAllElements(arr) {
  if (arr.length<1){
    return 0;
  }
  else{
    var prod = 1;
    for (var i =0;i<arr.length;i++){
      prod*=arr[i];
    }
  }
  return prod;
}
//115
function filterEvenElements(arr) {
  var out = [];
 for (var i=0; i<arr.length;i++){
   if (arr[i]%2===0){
     out.push(arr[i]);
   }
 }
 return out;
}
//116
function getLengthOfShortestElement(arr) {
  if (arr.length<1 ){ return 0; }
  var min =arr[0].length;
  for (var i =0;i<arr.length;i++){
    if(arr[i].length < min ){
      min = arr[i].length;
    }
  }
return min;
}
//117
function getLongestElement(arr) {
  if (arr.length<1 ){ return 0; }
   var str = arr[0];
   var max =str.length;
   for (var i =0;i<arr.length;i++){
     if(arr[i].length > max ){
       max = arr[i].length;
       str = arr[i];
     }
   }
 return str;
 }
 //118
 function findSmallestElement(arr) {
  if (arr.length<1 ){ return 0; }
  var min = arr[0];
   for (var i =0;i<arr.length;i++){
     if(arr[i] < min ){
       min = arr[i];
     }
   }
 return min;
}
//119
function findShortestElement(arr) {
  if (arr.length<1 ){ return 0; }
   var str = arr[0];
   var min =str.length;
   for (var i =0;i<arr.length;i++){
     if(arr[i].length < min ){
       min = arr[i].length;
       str = arr[i];
     }
   }
 return str;
}
//120










  











