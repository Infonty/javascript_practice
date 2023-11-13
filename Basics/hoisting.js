console.log(addOne(5))

function addOne (num){
    return num+1;
}

//this type syntax will not do hoisting
const addTwo=function (num){
    return num+2;
}