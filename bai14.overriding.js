class MachineCoffee{
    makeCofee(){
        console.log('Making coffee....')
    };
}
// ghi đè toàn bộ nội dung
class SpecicalCoffeeMachine extends MachineCoffee{
    makeCofee(cb){
        console.log('Making coffee and do something...');
        cb()
    }
}
var coffeeMachine = new SpecicalCoffeeMachine();
console.log(coffeeMachine.makeCofee(function(){
    console.log('Call the boss ...');
}));