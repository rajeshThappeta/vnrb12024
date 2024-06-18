//function declaration
function findSum(a, b) {
  let sum = a + b;
  return sum;
}

//invoke function
let result1 = findSum(10, 30);
console.log(result1);
let result2 = findSum(100, 200);
console.log(result2);
let result3 = findSum(123, 345);
console.log(result3);

function findBig(fn, sn) {
  if (fn > sn) {
    return "first number is big";
  } else if (fn === sn) {
    return "botn are equal";
  } else {
    return "second number is big";
  }
}

let result4 = findBig(10, 20);
console.log(result4);
