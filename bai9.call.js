function greeting(name,age){
    return `Hi ${this.name}, I am ${this.age}`
};
// console.log(greeting('Linh',10))
const cat={
    name:'Meo mao',
    age:'10'
}
console.log(greeting.call(cat))
// method .call(gia tri dai dien bien this,gia tri truyen vao,....)
// khas giong ham .blind
// neu khong dung .call ==>undefined(this)