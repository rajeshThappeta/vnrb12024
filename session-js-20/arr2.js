let users=[{id:1,name:'ravi'},{id:2,name:'vikas'}];

//access elements
// for(let userObj of users){
//     console.log(userObj)
// }




//insert elements
    //start
    users.unshift({id:3,name:'manasa'},{id:4,name:'bhanu'})
    console.log(users)
    //end
    users.push({id:5,name:'suresh'})
    console.log(users)
    //in between(index based)
    users.splice(2,0,{id:6,name:'varun'})
    console.log(users)

    
//delete element
    //start
    //end
    //in between(index based)
    
//update