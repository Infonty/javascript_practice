//SLICE it will not change original array and last is excluded

var a=[1,2,3,4,5,6];
console.log(a.slice(3,5));
console.log(a);

//SPLICE it will change the original array and second argument is count 

var b=[8,9,10,11,12,13];
console.log(b.splice(2,4));
console.log(b)