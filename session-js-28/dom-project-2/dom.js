let form=document.querySelector('form');
let input1=document.querySelector('#username');
let input2=document.querySelector('#dob');
let submitBtn=document.querySelector('.submit-btn');
let tbody=document.querySelector('tbody')


form.addEventListener('submit',(event)=>{
    console.log("first")
    //stop page refresh after form submission
    event.preventDefault()
    //read values from input fields
    let username=input1.value;
    let dob=input2.value;
    
    // let usernameh2=document.createElement('h2')
    // usernameh2.textContent=username;
    // usernameh2.setAttribute('class','text-center text-danger')

    // let dobh2=document.createElement('h2')
    // dobh2.textContent=dob;
    // dobh2.setAttribute('class','text-center')

    // //append to dom
    // document.body.appendChild(usernameh2)
    // document.body.appendChild(dobh2)

    tbody.innerHTML+=`<tr><td>${username}</td><td>${dob}</td></tr>`
   
})


