// let arr = ["a","s", "d", "e", "r", "a", "b"];
let arr = "ertyhjgca"
let vowelArr = [];
let consonantArr = [];

let vowel = "aeiou";

for(let i=0;i<arr.length;i++){
    if(vowel.includes(arr[i])){
        vowelArr.push(arr[i])
    }else{
        consonantArr.push(arr[i]);
    }
}

console.log("vowel",vowelArr);
console.log("consonant",consonantArr);
