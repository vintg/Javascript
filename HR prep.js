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
function getLargestElement(arr) {
    if (arr.length<1 ){ return 0; }
    var max = arr[0]
     for (var i =0;i<arr.length;i++){
       if(arr[i] > max ){
         max = arr[i];
       }
     }
   return max;
  }
//121
function computeSumOfAllElements(arr) {
    var sum = 0;
    for (var i = 0;i<arr.length;i++){
      sum+=arr[i];
    }
    return sum;
  }
//122
function calculateBillTotal(preTaxAndTipAmount) {
    var sub= preTaxAndTipAmount;
    var tip = sub*.15;
    var tax = .095*sub;
    return (sub+tip+tax);
  }
//123
function getStringLength(string) {
    var ct = 0;
    for (var i in string){
      ct++;
    }
  return ct;
  }
//124
function joinArrayOfArrays(arr) {
    var out = [];
    for (var i=0;i<arr.length;i++){
      for(var e =0;e<arr[i].length;e++){
        out.push(arr[i][e]);
      }
    }
    return out;
  }
//125
function getProductOfAllElementsAtProperty(obj, key) {
    var k = obj[key];
    if (Array.isArray(k) && k.length>0){
      var prod = 1;
      for (var i=0;i<k.length;i++){
        prod*= k[i];
      }
      return prod;
    }
  return 0;
  }
  //126
  function sumDigits(num) {
    var arr = num.toString().split('');
    var sum = 0;
    var i=0;
    while(i<arr.length){
      var conv = Number(arr[i]);
      if (conv >-1){
        sum+= conv;
        i++;
      }
      else {
        sum-=Number(arr[i+1]);
        i+=2;
      }
    }
  return sum;
  }
  //127
  function getSumOfAllElementsAtProperty(obj, key) {
    var sum=0;
    console.log(obj[key]);
    if (obj.hasOwnProperty(key)){
      var k = obj[key];
      if (Array.isArray(k) && k.length>0){
          for(var i=0;i<k.length;i++){
            console.log(k[i]);
            sum+=k[i];
          }
      }
    }
  return sum;
  }
  //128
  function findShortestWordAmongMixedElements(arr) {
    var out ='';
    if (arr.length<1){
      return out;
    }
    else{
      for (var i= 0; i<arr.length;i++){
        var ele = arr[i];
        if (typeof ele==='string'){
          if (out===''){
            out = ele;
          }
          var len = ele.length;
          if (len < out.length){
            out = ele;
          }
        }
      }
    }
  return out;
  }
  //129
  function findSmallestNumberAmongMixedElements(arr) {
    if (arr.length<1){
      return 0;
    }
    var min ='1';
    for (var i=0;i<arr.length;i++){
      if (typeof arr[i] ==='number'){
        if (typeof min==='string'){
          min = arr[i];
        }
        if (arr[i] < min){ min = arr[i];}
      }
    }
    if (typeof min!=='number'){return 0;}
    return min;
  }
  //130
  function getLongestWordOfMixedElements(arr) {
    var str = '';
    if (arr.length<1) { return str;}
    for (var i=0;i<arr.length;i++){
      var e = arr[i]
      if (typeof e==='string'){
        if(e.length > str.length){
          str = e;
        }
      }
    }
    return str;
  }
  //131
  function getLargestNumberAmongMixedElements(arr) {
    console.log(arr);
    if (arr.length < 1){return 0;}
    var max = 'a';
    for (var i = 0; i<arr.length;i++){
      var e = arr[i];
      if (typeof e==='number'){
        if(typeof max==='string'){
          max = e;
        }
        if(e>max){max = e;}
      }
    }
    return (typeof max==='number') ? max:0;
  }
  //132
  function computeSummationToN(n) {
    var sum = n;
    for (var i= 0;i<n;i++){
      sum+=i;
    }
  return sum;
  }
  //133
  function convertScoreToGrade(score) {
    if (score <0 || score >100){
      return 'INVALID SCORE';
    }
    var grade = 'F';
    if (score > 59){ grade = 'D';}
    if (score > 69){ grade = 'C';}
    if (score > 79){ grade = 'B';}
    if (score > 89){ grade = 'A';}
    return grade;
  }
  //134
  function convertScoreToGradeWithPlusAndMinus(score) {
    if (score <0 || score >100){
      return 'INVALID SCORE';
    }
    var grade = 'F';
    if (score > 59){ grade = 'D';}
    if (score > 69){ grade = 'C';}
    if (score > 79){ grade = 'B';}
    if (score > 89){ grade = 'A';}
    
    var single = score.toString()[1];
    if(score===100){grade+='+';}
    else{
      if (single<3){ grade+='-'; }
      else if (single > 7){grade+='+';}
    }
    return grade;
  }
  //135
  function computeFactorialOfN(n) {
    var fact = n;
    for (var i = 1; i<n;i++){
      fact*=i;
    }
  return fact;
  }
  //136
  function repeatString(string, num) {
    if (num===0){return '';}
    var str=string;
    for ( var i = 1; i< num;i++){
      str+=string;
    }
    return str;
  }
  //137
  function getLongestOfThreeWords(word1, word2, word3) {
    var l1 = word1.length;
    var l2 = word2.length;
    var l3 = word3.length;
    
    var longest= word1;
    if(l2 > l1){
      longest= word2;
    }
    if (l3 > l2){
      longest =word3;
    }
    return longest;
  }
  //138
  function findShortestOfOfThreeWords(word1, word2, word3) {
    var l1 = word1.length;
    var l2 = word2.length;
    var l3 = word3.length;
      
    var shortest= word1;
    if(l2 < l1){
      shortest= word2;
    }
    if (l3 < l2){
      shortest =word3;
    }
    return shortest;
  }
  //139
  function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    var int = Math.pow(1+interestRate/compoundingFrequency,(compoundingFrequency*timeInYears));
    return principal * (int-1);
  }
  //140
  function modulo(num1, num2) {
    if (num1 ==='NaN' || num2 ==='NaN'){
      return NaN;
    }
    if (num2===0){
      return NaN;
    }
    if (num1===0){
      return 0;
    }
    
    var x = Math.abs(num1);
    var y = Math.abs(num2);
  
    console.log(x,y);
    var delta = x-y;
    while(delta >=0){
      console.log(x+' - '+y+'...'+delta);
      delta -=y;
    }
    delta+=y;
    if (num1<0){
      delta*=-1;
    }
    return delta;
  }
  //141
  function multiply(num1, num2) {
    var pos =true;
    if (num1===0 || num2 ===0){return 0;}
    if( (num1 <0 && num2 >0) || (num1>0 && num2<0) ) {
      pos = false;
    }
    var x = Math.abs(num1);
    var y = Math.abs(num2);
      
    var prod = 0;
    for (var i =1;i<=y;i++){
      if(pos===true){
        prod+=x;
      }
      else{
        prod-=x;
      }
    }
   return prod;  
  }
//142
function isOddWithoutModulo(num) {
  var str =num.toString();
  var odd = false;
  var ones = Number(str[str.length-1]);
  var odds = [1,3,5,7,9];
  if (odds.indexOf(ones)>=0){
    odd = true;
  }
  return odd;
}
//143
function isEvenWithoutModulo(num) {
  var str =num.toString();
  var even = false;
  var ones = Number(str[str.length-1]);
  var evens = [0,2,4,6,8];
  if (evens.indexOf(ones)>=0){
    even = true;
  }
  return even;
}
//144
function multiplyBetween(num1, num2) {
  if (num2 <= num1 ) {
    return 0;
  }
  var prod = 1;
  for (var i=num1;i<num2;i++){
    prod*=i;
  }
return prod;
}
//145
function computeSumBetween(num1, num2) {
  if (num2 <= num1 ) {
    return 0;
  }
  var sum = 0;
  for (var i=num1;i<num2;i++){
    sum+=i;
  }
return sum;
}
// MODULE 01 
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
function assertEqual(actual, expected, testName) {
  if (actual === expected){
    console.log('passed')
  } else {
    console.log('failed ['+testName +'] Expected '+expected + ', but received '+actual);
  }
}

// Code under test:
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
  })
  return doesEveryElementMatch;
}
// NOTE - every makes use of a callbackFunction. In order to test it properly, you will need to write one. 
function isNum(element){
    return (typeof element==='number');
  }
// Calls to 'assertEqual':
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
  var chars = text.split('').map(function(char){
    return char.toLowerCase();
  });
  chars = new Set(chars);
  return text.length === chars.size;
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
