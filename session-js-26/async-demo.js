//Three customers reach to restaurant
//customer-1 ordered biryani which takes 10 mins
//customer-2 ordered soup which takes 5 mins
//customer-3 ordered water bottle which takes 1 mins

console.log("Three customers reached restaurant");

console.log("cutomer-1 ordered biryani")
setTimeout(() => {
    console.log("Cust-1 received biryani")
}, 10000);

console.log("cutomer-2 ordered soup")
setTimeout(() => {
    console.log("Cust-2 received soup")
}, 5000);

console.log("cutomer-3 ordered water bottle")
setTimeout(() => {
    console.log("Cust-3 received waterbottle")
}, 1000);