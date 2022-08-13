let test = function(){
    test();  // * ---------> ekhane test namok function ti nijer moddhe nijekei call kortese.tai eti recursive function
}
// let sum = 0;
function sum(i){
    if(i === 0){
        return 0;
    }
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);