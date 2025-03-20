let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2,7, 8, 9];

let arr3=[];
for(let i=0;i<arr1.length;i++){
    arr3.push(arr1[i]);
}

for(let i=0;i<arr2.length;i++){
    let istrue = false;
    for(let j=0;j<arr3.length;j++){
        if(arr2[i] === arr3[j]){
            istrue = true;
            break;
        }
    }
    if(!istrue){
        arr3.push(arr2[i]);
    }
}

console.log(arr3); // Output: [1, 2, 3, 4, 5, 7, 8, 9]
