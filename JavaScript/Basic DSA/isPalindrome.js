let str = "aabba";

let left = 0;
let right = str.length - 1;
let result = true;

while (left < right) {
  if (str[left] !== str[right]) {
    result = false;
    break;
  }
  left++;
  right--;
}

console.log(result);
