const arr = [1, 5, 8, 10];
let k = 2;

let newArr = [];
let min = Infinity;
let max = -Infinity; 

for(let i=0;i<arr.length;i++){
    
    if(i<k-1)
    newArr.push(arr[i]+k)
    else
    newArr.push(arr[i]-k)
    
    if(min>newArr[i])
    min = newArr[i];
    
    if(max<newArr[i])
    max = newArr[i]
}

// console.log(newArr)
console.log(max-min)




// let arr=[1,5,8,10]; 
// //  3,7,10,8
// let  k=2;
// // let max=-Infinity;
// // let min=Infinity;
// let newArr=[];
// for(let i=0; i<arr.length;i++){
//     if(k-1>i){
//         newArr.push(arr[i]+k);
//     }
//     else{
//         newArr.push(arr[i]-k);
//     }

// }
// // for(let i=0;i<newArr.length;i++){
// //     if(max<newArr[i]){
// //         max=newArr[i];
// //     }
// //     if(min>newArr[i]){
// //         min=newArr[i];
// //     }
// // }

// console.log(newArr);
