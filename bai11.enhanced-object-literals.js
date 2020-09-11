// co 2 cach khai bao 1 object
//------------------------------------
// constructor function
// function Mouse(name){
//     this.name = name;
// }

// Mouse.prototype.run = function(){
//     console.log(` ${this.name} is running`);
// }

// const mickey = new Mouse('mickey');
// mickey.run()
//---------------------------------------
//object literals
// const Mouse = {
//     name:'Mickey',
//     run:function(){ // day goi la object
//         console.log(` ${this.name} is running`);
//     }

// }
// console.log(Mouse.run())
//-------------------------------------
// Enhanced object literals 
var name = 'Mickey';
const Mouse = {
    name,//name:name
    run(){// run:function
        console.log(` ${this.name} is running`);
    }
}
console.log(Mouse.run())