//about document object
console.log(document)
//access head & body of DOM
console.log(document.head)
console.log(document.body)


//access other elements
let heading1=document.querySelector('#heading1')
console.log(heading1.textContent)

let heading2=document.querySelector('.heading2')
console.log(heading2.textContent)

let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let parent=document.querySelector('.parent')
let p=document.querySelector('p')

//adding evnt handler
btn1.addEventListener('click',()=>{
   //change content dynamically
   heading1.textContent='Document Object Model';
   //change styles dynamically
   heading1.style.color='red';
   heading1.style.backgroundColor='yellow'
   heading1.style.fontSize='50px'
   //create element & add to DOM
   let h2=document.createElement('h2')
   h2.textContent='This is dynamic element' ;
   h2.style.color='blue';
   parent.appendChild(h2)


})



//remove elements from DOM
btn2.addEventListener('click',()=>{
    //removing an element itself
    heading2.remove();
    //remove child element
    document.body.removeChild(p)
})