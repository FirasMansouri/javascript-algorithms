oddishOrEvenish = (num) =>{
    let str = num.toString();
    let sum = 0;
    for(i=0; i<= str.length-1; i++){
        sum += Number(str[i]);
    }
    return (sum%2==0 ? "Evenish" : "Oddish");
}

//----------------------testing-----------------------------
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));