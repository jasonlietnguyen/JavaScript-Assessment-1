// DONE
//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
string8 = parseInt(string8)
var total = num10 + string8 + one

// console.log(total)

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
for (var i = 20; i < 100; i++) {
  if (i % 3 === 0) {
    // console.log(i)
  }
}

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
var sum = 0 
for (var j = 0; j < scores.length; j++) {
  sum += scores[j];
}
// console.log(sum / scores.length)