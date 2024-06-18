let a = 16;
let b = 14;

if (a > b) {
  console.log("a is big");
} else if (a === b) {
  console.log("both are equal");
} else {
  console.log("b is big");
}

let age = 19;

if (age > 18) {
  //submit app
  console.log("your app submitted");
} else {
  console.log("You are not eligible to apply");
}

let choice = 15;
let fn = 10;
let sn = 20;
//switch statement
switch (choice) {
  case 1:
    console.log("sum :", fn + sn);
    break;
  case 2:
    console.log("diff :", fn - sn);
    break;
  case 3:
    console.log("product :", fn * sn);
    break;
  case 4:
    console.log("quotient :", fn / sn);
    break;
  case 5:
    console.log("remainder :", fn % sn);
    break;
  default:
    console.log("Plz select right choice");
}

//if - else
let x = 10;
let y = 11;
if (x === y) {
  console.log("both are equal");
} else {
  console.log("not equal");
}

//ternary operator ?:

//condition ? expr-1 : expr-2

x === y ? console.log("equal") : console.log("not");
