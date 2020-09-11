// global content
// function content
// blind
var Mouse = {
    name:"Mickey",
    sayHi: function(){
        console.log('My name is:'+this.name)
    }
};
var cat={
    name:"meo meo..."
}
Mouse.sayHi();
// vi sayHi cos content la Mouse va bien this tro ve Mouse

var say = Mouse.sayHi
say()
// ==>undefine 
//say = function(){console....}
// content la global ==> dung .bind()
var say = Mouse.sayHi.bind(cat);
say()