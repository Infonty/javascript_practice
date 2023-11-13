function x(){
    var a=10;
    return function y(){
        console.log(a);
    }
}
var z=x();      //it is storing lexical scoping of function in z
console.log(z);
z();            //it is printing a actual value of a 