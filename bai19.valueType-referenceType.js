// kiểu value type nó sẽ so sánh giá trị a và b
// kiểu reference type nó sẽ so sánh vị trí ô nhớ ob1 và ob2(khi khởi tạo ob1, ob2 thì nó luu vào 2 ô nhớ khác nhau)
var a = 1;
var b = 1;
//console.log(a ===b);// true

var ob1 = { a:1 };
var ob2 = { a:1 };
//console.log(ob1===ob2);// false


//----------------------------------
var c = a; // c coppy value a
console.log(a === c);// true
c=2;// c=2 , a  =1
console.log(a === c);// false

var ob3 = ob1; // ob3 gán bằng với địa chỉ ô nhớ ob1
console.log(ob1 === ob3); // so sánh cùng 1 ô nhớ ==> true
ob3.a = 3; // gán a cùng ô nhớ ==> ob3={a: 3} , ob1={a: 3}
console.log(ob1 === ob3 );// true


//--------------------------------------
// ob1 ={a: 3}
function log(x){
    x.b = 5;
}
 log(ob1);
 console.log(ob1)// ob1 ={a: 3, b:5}
 

