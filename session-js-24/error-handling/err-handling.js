//what is an error
//what happenened when error is not handled(js engine terminate the prog execution abnormally)
//how to handle errors

let test = {
  name: "ravi",
  city: "hyd",
};

try {
    if(test.city===undefined){
        throw new Error('city property removed')
    }else{
        console.log(test.city.length)
    }
} catch (err) {
  console.error("error is ",err);
}
finally{
    console.log("finally executed")
}

console.log("hello frnds");
console.log("good night");

function wish() {
  return "All the best";
}

wish();

console.log("one more statement")


















let username='ravi';
let city='chennai';
console.log("username is ",username," and city is ",city)
console.log(`username is ${username} and city is ${city}`)