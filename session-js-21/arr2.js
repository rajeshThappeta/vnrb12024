
let users=[
    {id:1,name:'ravi',age:19,salary:20000},
    {id:2,name:'manasa',age:23,salary:40000},
    {id:3,name:'bhanu',age:21,salary:10000},
    {id:4,name:'vikas',age:32,salary:50000}
]

//filter
    //get users whose age less than 22
    let user1=users.filter(userObj=>userObj.age<22)
    console.log(user1)

//map
    //add 5000 salary for each user
    // let users2=users.map(userObj=>{
    //     userObj.salary=userObj.salary+5000;
    //     return userObj
    // })

    // console.log(users2)

//find user with lowest salary
let user3=users.reduce((acc,userObj)=>userObj.salary<acc.salary?userObj:acc)
console.log(user3)