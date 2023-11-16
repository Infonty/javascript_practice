function Counter(){
    var count=0;
    this.increase=function (){
        count++;
        console.log(count);
    };
    this.decrease=function (){
        count--;
        console.log(count);
    }
}
var ans=new Counter();      //  USE OF NEW KEYWORD  
ans.increase();
ans.increase();