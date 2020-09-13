//static method khon duoc goi tu intance cua class do 
//ma duoc goi tu chinh class
class foo{
    static someMethod(){
        console.log('some method');
    }
    anotherMethod(){
        console.log('another method');
    }
};
console.log(foo.someMethod())// ==>Ok vi nó được gọi từ chính class
//console.log(foo.anotherMethod())//==>error vì nó được gọi từ intance
const method = new foo()// intance
console.log(method.anotherMethod())
//-------------------dich sang constructor function
foo.someMethod = function(){

}
foo.prototype.method = function(){
    
}