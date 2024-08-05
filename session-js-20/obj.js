let person={
    id:1,
    name:'ravi'
}


//access props
// console.log(person.name)
// console.log(person['name'])

//iterate(for-in)
for(let key in person){
    console.log(person[key])
}

//insert new prop
person.city='hyd';
person.mobile=99999999;


//delete props
delete person.name;


//update props
person.city='chennai'
console.log(person);

//complex obj
let student={
    rollNo:100,
    firstName:'kiran',
    lastName:'babu',
    isQualified:true,
    skills:['css','js','react'],
    marks:[{maths:99},{science:78},{social:67}],
    address:{
        city:'hyd',
        street:'kphb'
    },
    getName:function(){
        return this.firstName+this.lastName
    }

}


console.log(student.getName())

