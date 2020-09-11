// comtructor function
// function Mouse(name){
//     this.name = name;
// };

// Mouse.prototype.run = function(){
//     return `${this.name} is running`
// };

// var mickey = new Mouse('Mickey');
// console.log(mickey.run())
//-----------------------------------
// dung class thay the
class Mouse {
    constructor(name) {
        this.name = name;
    }
    run(){
        console.log(`${this.name} is running`)
    }
};

var mickey = new Mouse('Mickey');
console.log(mickey.run())