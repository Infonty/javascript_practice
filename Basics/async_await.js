

const pr=new Promise(function(resolve,reject){
    setTimeout(() => {
        return resolve("Promise 100 resolved value");
    }, 1000);
})
async function getData(){
    pr.then((result)=>{
        console.log(result);        //here js engine will not wait for promise
    })        
    
    console.log("hello this example is to showcase without async and await");
}

//async always return a promise
getData();



//await

const p=new Promise ((res,rej)=>{
    setTimeout(()=>{
        return res("Promise 200 resolved value")
    },10000);
});
async function handlePromise(){
    setTimeout(() => {
        console.log("js engine waiting for promise to execute")
    }, 1000);
    const val=await p;                  //because of this js engine wait for promise to execute fully
    console.log("Namaste bhai log")
    console.log(val);
    console.log("Jaduuuuu");
};
handlePromise();

