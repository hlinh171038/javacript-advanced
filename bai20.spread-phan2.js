var ob1 ={
    a:1,
    b:2,
    c:3,
    d:{e:2}
}
// đề bài: clone ob1 thành ob2
    //var ob2 =ob1;// không sử dụng cách này vì nếu thay đổi giá trị ob2 thì ob1 củng thay đổi theo(reference type)

//-------------------------------
    // let ob2 = {};
    // for(let key in ob1){
    //     console.log(key)
    //     ob2[key] = ob1[key]
    // }
    // ob2.a =5;
    // console.log({ob1,ob2});// khi thay đổi ob2 thì ob1 khoog bị thay đổi
//------------------------- but thêm d là 1 object thì
    // ob2.d.e =11;
    // console.log({ob1,ob2});//bị thay đổi vì d là 1 object(reference type)
// dùng deep clone------------------------------------------
let ob2 = JSON.parse(JSON.stringify(ob1));


ob2.d.e = 11;


console.log({ob1,ob2});
    
