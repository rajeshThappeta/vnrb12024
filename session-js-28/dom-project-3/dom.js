
let parent=document.querySelector('.parent');

//get data from api
function getPostsData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>{
       posts.forEach(postObj=>{
        parent.innerHTML+=`<div class='col g-3 text-center'>
            <div class='card card-body h-100 '>
               <h3>${postObj.userId}</h3>
                <h3>${postObj.id}</h3>
                 <h3>${postObj.title}</h3>
            </div>
        </div>`
       })

    }).catch(err=>console.log(err))
}


getPostsData()



