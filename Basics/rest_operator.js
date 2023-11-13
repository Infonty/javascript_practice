function restop(val1,val2,...arr){
    return arr;
}
// ...arr is a rest operator and arr is a array which hold extra arguments
console.log(restop(100,200,500,600));

//passing object in function 

const user={
    username:"Mohit",
    id: 28
}
function handleobj(anyobj){
    console.log(`${anyobj.username} has a id : ${anyobj.id}`)
}
handleobj(user) //calling funtion 
