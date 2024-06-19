//NON-PRIMITIVES

//array
let arr = [10, 20, 30, 50];

//access element
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

let index = 0;
while (index < arr.length) {
  console.log(arr[index]);
  index++;
}

//for-of loop
for (let element of arr) {
  console.log(element);
}

//student object
let student = {
  sno: 100,
  name: "ravi",
  email: "ravi@mail.com",
  age: 21,
  marks: [90, 98, 78],
  address: {
    street: "kphb",
    pincode: 56666,
    city: "hyderabad",
  },
};

//access properties
console.log(student.marks);
console.log(student.address.city);
console.log(student.address.pincode);

//iterate an object
//for-in loop
// for (let key in student) {
//   console.log(student[key]);
// }
//product object
let product = {
  pid: 100,
  pname: "TV",
  brand: "sony",
  manufacturer: {
    name: "John",
    city: "bangalore",
  },
  getProductName: function () {
    //process the data of obj
    console.log(this.brand);
  },
};

product.getProductName();
