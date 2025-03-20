const arr = [2, 3, -8, 7, -1, 2, 3];

let maxSum = 0;
let currentSum = 0;

for(let i =0; i<arr.length;i++){
     currentSum +=  arr[i];
     
     if(currentSum > maxSum){
         maxSum = currentSum;
     }
     if(currentSum < 0){
         currentSum = 0;
     }
     
}

console.log(maxSum)