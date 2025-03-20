let arr = [2, 7, 3,7,5];

let duplicate;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            duplicate = arr[i];
            break;
        }
    }
}

console.log(duplicate)