// ...rest --> gom phần tử thành array
// ...spread --> tách array thành từng phần tử
let a = [1,2,3];
let b = [0, ...a, 4];
console.log(b)
function sum( ...nums){
    var result = nums.reduce((a,b) =>a+b);
    return result
}
console.log(sum(...b))