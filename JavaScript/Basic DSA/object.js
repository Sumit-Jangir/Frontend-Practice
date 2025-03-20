const nums = [3, 2, 3];  
const double = nums.map((num) => {  
return num * 2;  
}).reduce((acc, num) => acc + num);  
console.log(double); 
