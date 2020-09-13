//Định nghĩa: higher order function là function return về function,
// hay tham số truyền vào là một function( callback function)

function waitAndRun(ms,func){
    setTimeout(func, ms);
};
function run(){
    console.log('run');
}
console.log(waitAndRun(1000,run))