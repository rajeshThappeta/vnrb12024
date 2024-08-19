console.log("first");

//time consuming
for (let index = 0; index < 10; index++) {}

console.log("second");
console.log("third");

function test(a, b) {
  return a + b;
}

console.log("sum is ", test(10, 20));
