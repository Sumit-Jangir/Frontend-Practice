let str = "I Love You"

let newStr = [];
let word = ""
let rev = []
for(let i=0;i<str.length;i++){

    if(str[i]== " "){
        newStr.push(word);
        word = "";
    }else{
        word += str[i];
    }
}
newStr.push(word)

for(let i=newStr.length-1;i>=0;i--){
    rev.push(newStr[i])
}



console.log(rev);
