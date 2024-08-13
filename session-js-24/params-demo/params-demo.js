//simple params
function findSum1(a,b){
    return a+b;
}

console.log(findSum1(10,20))

//default value params
function findSum2(a=0,b=0){
    return a+b;
}

console.log(findSum2(10,20))

//rest params
function findSum3(...a){
    if(a.length===0){
        return "plz supply atleast two args"
    }
    return  a.reduce((acc,element)=>acc+element)
}

console.log(findSum3())
