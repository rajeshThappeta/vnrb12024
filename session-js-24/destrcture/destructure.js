//packing
    //array
    let ar=[10,20,30]

    //object
    let emp={
        id:10,
        name:'ravi',
        address:{
            city:'hyd'
        }
    }

//unpacking
    let [x,,z]=ar;
    console.log(x)
   // console.log(y)
    console.log(z)

    let {id,name,address:{city}}=emp;
    console.log(id,name)
    console.log(city)