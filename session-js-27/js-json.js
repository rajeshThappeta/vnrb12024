//JS obj
let person={
    pid:100,
    name:'ravi',
    age:21
}


//convert js obj to JSON
let personJson=JSON.stringify(person)
console.log(personJson)


//convert JSON to js obj
let pjs=JSON.parse('{"pid":100,"name":"ravi","age":21}');
console.log(pjs)