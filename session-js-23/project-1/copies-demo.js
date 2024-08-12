
//create copy for primitive
let a=10;

let copy=a;
console.log("a is ",a)
console.log("copy of a is ",copy)

//check copy
a=121;
console.log("a is ",a)
console.log("copy of a is ",copy)



//create copy for ref type(non-primitive)
 let emp={
    empid:100,
    name:'ravi'
 }

 //let copyEmp=emp;//wrong

 //let copyEmp=Object.assign({},emp)
 let copyEmp={...emp}

 console.log("emp is ",emp)
 console.log("emp copy is ",copyEmp)

 //test copy
 emp.empid=200;
 console.log("emp is ",emp)
 console.log("emp copy is ",copyEmp)
