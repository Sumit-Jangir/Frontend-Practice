let a = 1;  
function outer() {  
let b = 2;  
return function inner() {  
console.log(a + b);  
};  
}  
const innerFunc = outer();  
innerFunc();  
