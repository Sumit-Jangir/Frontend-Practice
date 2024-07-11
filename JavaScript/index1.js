let a = 20;
let b=1;
let sum = 0;
console.log(a);
console.log(a);
console.log(a);
for(let c=1;c<=a;c++){
    while(c>=1){
        let rem = c%10;
        
        sum = sum*10 + rem;
        a=a/10;
    }
    if(c==sum){
        console.log(c+"  ")
    }

}
