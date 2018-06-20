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