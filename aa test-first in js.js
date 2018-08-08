//004 pig latin

function translate(string){
    var words = string.split(' ');
    return words.map(latinize).join(' ');
}

function latinize(word){
    var vowels = 'aeiou'.split('');
    for (var i = 0; i<word.length;i++){
        if (vowels.includes(word[i])){
            var idx = i;
            break;
        }
    }
    return word.slice(idx)+word.slice(0,idx)+'ay';
}

//005 silly blocks spec
function reverser(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

function adder(n, add=0){
    return n+add;
}

function repeater(n){
    const n=0;
    for (var i in n){
        n++;
    }
    return n;
}

//006 performance monitor spec
function parseTime(){
    return Date.parse('2011-1-2 11:00:00');
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function elapsed_time(parseTime){
      startTime = new Date();
      parseTime();
      endTime = new Date();
      var timeDiff = .0001*(endTime - startTime);
      return Math.round(timeDiff);
  }
  
  //need to do

  //007 