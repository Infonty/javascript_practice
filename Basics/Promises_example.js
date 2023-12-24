const cart=["shirt","pants"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    return proceedToPayment(orderId);
}).catch(function(errr){
    console.log(errr.message);
})

.then(function(paymentinfo){
    console.log(paymentinfo);
})

//Producer
function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("cart is not valid")
            reject(err);
        }
        const orderId="123";
        if(orderId){
            setTimeout(function(){resolve(orderId)},5000);
            
        }
    })
    return pr;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        var bol=true;
        if (rightt(bol)){resolve("Payment is successful")}
        const errr=new Error("payment failed")
        reject(errr);
    })
}
function rightt(bol){
    return ;
}
function validateCart(cart){
    return false;
}
