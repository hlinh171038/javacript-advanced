// function sum(){
// //    console.log(arguments)
// var result = 0;
// for(let i=0;i<arguments.length;i++){
//    result += arguments[i];
// }
// return result
// }
function sum(){
    let number = Array.from(arguments);
    var result = number.reduce((sum, number) =>{
        return sum+number;
    },0);
    return result
}
console.log(sum(1,2,3,4,5,7));