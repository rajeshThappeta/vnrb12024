//function declaration & statement
function test1(a, b) {
  return a + b;
}

//call
let sum1=test1(10, 20);
console.log(sum1)

//function expression
let test2 = function (a, b) {
  return a+b
};

//call
let sum2=test2(100, 200);
console.log(sum2)

//arrow function(simplified ver of fun exp)
let test3= (a, b)=>  a+b
  

//call
let sum3=test3(200,400);
console.log(sum3)



let compare1=function(x,y){
    if(x>y){
        return x;
    }else if (x===y){
        return 'equal'
    }else{
        return y;
    }
}


let compare2=(x,y)=>{
    if(x>y){
        return x;
    }else if (x===y){
        return 'equal'
    }else{
        return y;
    }
}


