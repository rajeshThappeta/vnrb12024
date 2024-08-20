//HTTP client
//make HTTP GET req
function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => console.log(posts))
    .catch((err) => console.log(err));
}

//getData();

console.log("first")




//get products data
function getproducts(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(products=>console.table(products))
    .catch(err=>console.log(err) )
}

getproducts()