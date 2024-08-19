//getting first rank

    //child make promise
    function promiseOfGettingRank(){
        let readWell=true;
        console.log("Child promise to parent that he can get first rank")
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                if(readWell===true){
                    resolve("Got first rank")
                }else{
                    reject("Didnt achive it")
                }
            },10000)
            
        })
    }


    //parents cosume promise
    promiseOfGettingRank()
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log("err :",err)

    })


    console.log("first")