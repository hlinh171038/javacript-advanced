class MachineCoffee{
    makeCofee(){
        console.log('Making coffee....')
    };
}
class SpecicalCoffeeMachine extends MachineCoffee{
    makeCoffeeBoss(cb){
        console.log('Making coffee and do something...');
        cb()
    }
}
var coffeeMachine = new SpecicalCoffeeMachine();
console.log(coffeeMachine.makeCoffeeBoss(function(){
    console.log('Call the boss ...');
}));