
let marks=[90,58,79,57,12,99,34]

//filter(selection)
    //get all element less than 50
   let result1= marks.filter((element)=> element<50)
    //get elements between 30 and 90
    let result2=marks.filter(element=>element>30&&element<90)

    console.log(result1)
    console.log(result2)


  
//map(modification)
    //add 10 for each element
    let result3=marks.map(element=>element+10)

    //add 10 for the element less than 50 and 20 for greater 
    let result4=marks.map(element=>{
        if(element<50){
            return element+10;
        }else{
            return element+20
        }
    })
    console.log(result3)
    console.log(result4)


//forEach(iteration)
    marks.forEach((element,index)=>{
        console.log(element,index)
    })



//find element 40
    let element=marks.find(el=>el===40)
    console.log(element)

//find index of an element 70
    let index=marks.findIndex(el=>el===70)
    console.log(index)


let test=[10,20,30,40]
//reduce(reduce array to a single value)
    //find sum  of marks
    //accumulator stores the result of prev opr
    let sum=test.reduce((accumulator,element)=> accumulator+element)
    console.log(sum)
    //get small element
    let small=marks.reduce((acc,element)=>acc<element?acc:element)
    console.log(small)