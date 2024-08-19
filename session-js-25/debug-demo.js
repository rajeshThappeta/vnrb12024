function findSum(...a){
    console.log(a)
    let sum=a.reduce((acc,element)=>acc+element);
    return sum;

}


let result=findSum(10,20,30)
console.log(result)



function getSum(a,b){
    let s=a-b;
    console.log(s)
    return s
}

let r=getSum(10,3)
console.log(r)