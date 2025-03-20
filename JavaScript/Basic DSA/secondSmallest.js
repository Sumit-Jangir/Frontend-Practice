let arr = [1,44,3,4,5,6,342,123]

let min = Infinity;
let secMin = Infinity;

for(let i = 0;i<arr.length;i++){
    if(arr[i]<min){
        secMin = min;
        min = arr[i];
    }else 
    if(arr[i]>min && arr[i]<secMin){
        secMin=arr[i];
    }
}
console.log(min,secMin);

