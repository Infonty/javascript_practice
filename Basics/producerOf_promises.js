
const cartt=["shoes","pants","shirt","jacket","Mobile"];

const promisee=createOrder(cart);

promisee.then(function(orderId){
    proceedToPayment(orderId);
}).catch(function(err){console.log(err)});        //to handle errors 
//Producer
function createOrder(cartt){
    const pr=new Promise(function(resolve,reject){  //having resolve and reject fnc 
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cartt)){
            const err=new Error("cart is invalid")
            reject(err);
        }

        const orderId="12345";
        resolve(orderId);
    });


    return pr;

}
function validateCart(cartt){
    return  true;
}
