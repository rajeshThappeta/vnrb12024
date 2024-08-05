let marks=[20,10,40];

//access elements
// for(let element of marks){
//     console.log(element)
// }


//insert elements
    //start
    let l1=marks.unshift(50,60)
    console.log(marks,l1)
    //end
    marks.push(100,200,300)
    console.log(marks)
    //in between(index based insertion)
    marks.splice(1,0,111,222,333)
    console.log(marks)
    

//delete element
    //start
    let rm1=marks.shift()
    console.log(marks)
    console.log(rm1)
    //end
    let rm2=marks.pop()
    console.log(marks)
    console.log(rm2)
    //in between(index based)
    let rm3=marks.splice(0,1)
    console.log(marks)
    console.log(rm3)

//update
    let rm4=marks.splice(1,1,2345)
    console.log(marks)
    console.log(rm4)



