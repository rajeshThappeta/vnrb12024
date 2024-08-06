
let emp={
    id:1,
    name:'john',
    age:21,
    salry:20000,
    city:'hyd'
}

//get all keys
let keys=Object.keys(emp)
console.log(keys)
//get all values
let v=Object.values(emp)
console.log(v)

//freeze the emp obj
Object.freeze(emp)
emp.name='madhu';
emp.mobile=999999;
delete emp.city;
console.log(emp)