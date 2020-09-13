class Annimal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`Eating ....`)
    }
}
class Bird extends Annimal {
    fly(){
        console.log(`${this.name} is fying...`)
    }
}
var bird = new Bird('Thong');
console.log(bird.fly())