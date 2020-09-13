function greeting(name,age){
    return `Hi ${this.name}, I am ${this.age}`
};
// console.log(greeting('Linh',10))
const cat={
    name:'Meo mao',
    age:'10'
}
console.log(greeting.call(cat))
// method .call(gia tri dai dien bien this,gia tri truyen vao(gia tri cua function),....)
// vi du : nếu hàm có .this ==> greeting.call(this,'Linh',10)
// ví dụ : nếu hàm không sử dụng thí ==> greeting.call(null,'Linh',10)
// khas giong ham .blind
// neu khong dung .call ==>undefined(this)