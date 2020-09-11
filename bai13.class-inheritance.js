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
        console.log('Flying')
    }
}
var bird = new Bird('thong');
console.log(bird.fly())