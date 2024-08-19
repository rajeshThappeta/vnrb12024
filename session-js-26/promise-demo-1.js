//create a promise
function meetFrndPromise(){

    let condition=true;
    console.log("I will meet you in 10 mins")

   // return "promise"
  return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(condition===true){
            resolve("Hello frnd..how are you!!!")
            }else{
            reject("Sorry frnd..meet you later!")
            }
    },7000)
       
  })
}

//consume promise
meetFrndPromise()
.then((res)=>{
    console.log("res is ",res)
})
.catch((err)=>{
    console.log("err is ",err)
})



//console.log("first")





