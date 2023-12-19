const cart=["shoes","shirt","pants","kurta","jacket"];

// callBackHell and inversion of control
createOrder(cart,function(orderId){     //in this blindly trust on createOrder api and passing the fnc 
    proceedToPayment(orderId);
});

//by using promises

const promise=createOrder(cart);
//{data: orderId}  obj created 
promise.then(function(orderId){ //in this we are attaching proceedToPayment api to createOrder api not giving control
    proceedToPayment(orderId);
});

//watch promise obj deeply 
const GITHUB_API="https://api.github.com/users/Infonty"
//fetch also return object

const user=fetch(GITHUB_API)  //fetch is returning a promise here

console.log(user); //print the promise object with its state and result

user.then (function(data){
    console.log(data);
})

