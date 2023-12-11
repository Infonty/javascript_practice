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
const outpt3=arr.reduce((accumuletor,current)=>{        //accumletor as a sum and it is used to find sum, min and max in array
    accumuletor+=current;
    return accumuletor;
},0)
console.log(outpt3)
10

//
const obj=[
    {firstname:"MOhit" ,lastname:"singh" ,age:22 },
    {firstname:"polhit" ,lastname:"Radha" ,age:22 },
    {firstname: "Rhhoit",lastname:"Kuntal" ,age:24 },
    {firstname:"banu" ,lastname:"gay" ,age: 15},
    {firstname:"babuuuuu" ,lastname:"Daya" ,age: 15}
]

//select first and last name
const outpt=obj.map((x)=>x.firstname+" "+x.lastname);
console.log(outpt)

//group them in terms of age like {22:1,20:2,15:2}

const otpt=obj.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else {
        acc[curr.age]=1
    }
    return acc
},{});
console.log(otpt)
//to print firstname having age > 20
const ot=obj.filter((x)=>x.age>20).map((x)=>x.firstname)
console.log(ot)
