// so sánh ...rest với argument
//[Arguments] { '0': 1, '1': 2, '2': 5, '3': 4, '4': 6, '5': 7 } ==> array like object
//[ 1, 2, 5, 4, 6, 7 ] ==> array
function sum(){
    console.log(arguments)
    const number = Array.from(arguments);
    var result = number.reduce((a,b) =>a+b,0);
    return result
}
function sum2(...nums){
    var result = nums.reduce((a,b)=>a+b,0);
    return result
}
console.log(sum2(1,2,5,4,67,));
//------------------------------------------
// bài tập nối chuỗi
function concat(separator,...strings){
    console.log(strings)
    var result = strings.join(separator);
    return result
}
function concat2(separator,...strings){
    console.log(strings)
    var result = strings.map(function(x){
        return x
    }).join('.');
    return result
}
console.log(concat2('.','a','b','c'));
