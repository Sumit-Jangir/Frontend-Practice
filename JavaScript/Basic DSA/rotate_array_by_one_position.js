const arr = [1, 2, 3, 4, 5];
let newArr = []
for(let i =1;i<arr.length;i++){
    newArr.push(arr[i]);
}

newArr.push(arr[0]);

console.log(newArr)