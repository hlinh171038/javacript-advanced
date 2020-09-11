// function greetings(name){
//     if(name===undefined){
//         name="friend";
//     }
//     return `Hi ${name}`;
// }
function greetings(name='friend', language='ja'){
    if(language==='en'){
        return `Hi ${name}`;
    }
    if(language==='ja'){
        return `Konnichiwa ${name}`;
    }
    return `Hi ${name}`;
}
console.log(greetings());