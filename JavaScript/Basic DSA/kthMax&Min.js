let arr = [1, 2, 4, 5, 6, 7, 9, 0,76,4534,45,3,324,23,123,343,546,547,567,675,46,423,4,];
let n = arr.length;
let k = 5;
let m = 3;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

console.log("min", arr[k - 1]);
console.log("max", arr[arr.length-m]);
