//method 1: 
isPandigital = (number) =>{
    let array_1= [...String(number)], allDigits= ['0','1','2','3','4','5','6','7','8','9']
    for(i=0; i<array_1.length ; i++){
        let digit= array_1[i], indexDigit=allDigits.indexOf(digit);
        if(allDigits.includes(array_1[i])) allDigits.splice(indexDigit,1)
    }
    return (allDigits.length==0 ? 'isPandigital' : 'NotPandigital');
}


// my solution in one line of code 
isPandigital=(num)=> new Set([...String(num)]).size === 10



//----------------testing------------------
console.log(isPandigital(98140723568910));
console.log(isPandigital(90864523148909));
console.log(isPandigital(122334456788999));