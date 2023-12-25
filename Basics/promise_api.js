const p1=new Promise(function(res,rej){
    //setTimeout(() => { res("p1 is success")}, 4000);
    setTimeout(() => { rej("p1 is rejected")}, 4000);
})
const p2=new Promise(function(res,rej){
    //setTimeout(() => { res("p2 is success")}, 1000);
    setTimeout(() => { rej("p2 is rejected")}, 1000);
})
const p3=new Promise(function(res,rej){
   // setTimeout(() => { res("p3 is success")}, 8000);
    setTimeout(() => { rej("p3 is rejected")}, 8000);
})
//in ALL api if one fails then it will give error
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.error(err+" "+",all condition as p2 settled first")
})
//in this it will wait for all promises and return a obj
Promise.allSettled([p1,p2,p3]).then((result)=>{
    console.log(result);
})
//in this the one who settled first is returned
Promise.race([p1,p2,p3]).then((result)=>{
    console.log(result);
}).catch((re)=>console.error(re+" "+",race condition as p2 settled first"))
//in this the first fullfilled is returned otherwise aggregate error
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((errr)=>{console.error(errr)})
