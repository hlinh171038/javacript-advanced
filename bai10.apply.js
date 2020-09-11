// su khac nhau call va apply
// call:function.call(dai dien this,params1,params2,...)
// apply:function.apply(dai dien this,[params1,params2,...])
function sum(){
 const number = Array.from(arguments);
 // chuyen like object thanh array
 var result  = number.reduce((sum,num)=>sum+num,0);
 return result
}
// tinh trung binh cac so truyen vao tuy y
function average(){
    var x = sum.apply(null,arguments);
    console.log(typeof(arguments))
    var result = x/arguments.length;
    return result
}
console.log(sum(1,2,3,6));
console.log(average(1,2,3,6))