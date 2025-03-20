let str = "my name is sumit";

let words = str.split(" ");
console.log(words);

let prevcount = 0;
let lonWord = ""

for(let i=0;i<words.length;i++){
    let count = words[i].length; 
    if(prevcount < count){
        lonWord = words[i];
        prevcount=count
    }
}

console.log(lonWord);

