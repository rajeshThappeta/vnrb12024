
//meeting frnd
function meetFrnd(frndAvaialability){
    console.log("Goint to meet frnd")
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(frndAvaialability===true){
                fulfilled("Met frnd")
            }else{
                rejected("Could not meet frnd")
            }
        },5000)
    })
}

//order food
function orderFood(deliveryExecutiveAvaialability){
    console.log("Preparing  to order food")
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(deliveryExecutiveAvaialability===true){
                fulfilled("received food")
            }else{
                rejected("Could not get food")
            }
        },5000)
    })
}

 

//consume the promises
meetFrnd(true)
.then(res=>{
    console.log(res);
    return orderFood(false)
})
.then(res=>console.log(res))
.catch(err=>console.log(err))



console.log("hi")
console.log("hello")