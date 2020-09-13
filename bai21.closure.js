// biến c (function scope) nó sẽ bị hủy khi return (kết thúc hàm)
function sum(a,b){
    var c = a+b;
     return function() {
       console.log(c)
    }
}
console.log(sum(1,2)())// phải thêm dấu () vì nó return về function

//------------------------------ứng dụng-------------------------
function debug(name){
    return function(str){
        console.log(`${name} và ${str}`);
    }
}
const log = debug('Linh');// gọi hàm lần 1 với name
var result =log('thầy cô giáo'); // gọi hàm lần 2 với string
console.log(result);//  ===>closure
//-------------------hoặc---------------
const log = debug('Linh')('thay co giao');
console.log(log);