let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {  // n-1 tak loop chalega
    for (let j = 0; j < n - i - 1; j++) { // n-i-1 tak chalega
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 10]
