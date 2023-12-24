
const p1=new Promise ((res,rej)=>{
    setTimeout(()=>{
        return res("Promise 100 resolved value")
    },10000);
});
const p2=new Promise ((res,rej)=>{
    setTimeout(()=>{
        return res("Promise 200 resolved value")
    },5000);
});
async function handlePromise(){
    const val=await p1;
    console.log("Namaste bhai log 1")
    console.log(val);
    const val2=await p2;
    console.log("Namaste bhai log 2")
    console.log(val2);
};
handlePromise();

//api url

const API_URL="user_url": "https://api.github.com/users/Infonty";

async function handleit(){
    console.log("fetching api");
   try
   {
     const data= await fetch(API_URL);
    const jsonValue=await data.json();
    console.log(jsonValue);
}
catch(err){
    console.log(err);
}
    
};
handleit();
//also can do this 
//handleit().catch((err)=>console.log(err));

