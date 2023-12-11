const arr=[3,6,1,4]
undefined
const arr=[3,6,1,4]
const output=arr.map((x)=>{return x*2})
console.log(output)
VM1842:3 (4) [6, 12, 2, 8]
undefined
const outpt2=arr.filter((x)=>x>3)
console.log(outpt2)
VM2008:2 (2) [6, 4]
undefined
console.log(arr)
VM2135:1 (4) [3, 6, 1, 4]
undefined
const outpt3=arr.reduce((accumuletor,current)=>{
    accumuletor+=current;
    return accumuletor;
},0)
console.log(outpt3)
VM2374:5 14
