// convert arrow function
// fat 

//  function sum(a,b){
//      return a+b;
//  }
//  console.log(sum(4,5))
// var sum = function(a,b){
//     return a+b;
// }
// console.log(sum(4,5))
// var square = (a,b) =>{
//     return a+b
// }
// console.log(square(4,5))
// var square = (a,b)=>a+b;
// console.log(square(3,4))
var arr=[1,2,3];
var square = arr.map(function(x){
    return x*x;
});
// console.log(square)
//----------------------------------
// var a ={
//     name:"AAA",
//     run:function(){
//         var run2=function(){
//             console.log(this.name);
//         }
//         run2();
//     }
// };// undefine
// sua
var a ={
    name:"AAA",
    run:function(){
        //var that = this
        var run2= () =>{
            console.log(this.name);
        }//.bind(this)or .bind(a)
        run2();
    }
};
a.run();
//-----------------------------------
var a = {
    foo:'bar',
    run:function(){
        setTimeout(function() {
            console.log(this.foo)
        },2000);
    }
};
a.run()
// chua nhu tren
