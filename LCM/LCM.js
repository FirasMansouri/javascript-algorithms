LCM =(num1, num2)=>{
    var largest = Math.max(num1, num2) , smallest = Math.min(num1, num2)
    for(i=largest; ;i+=largest) { if(i % smallest===0) return i }
}

//------------testing-------------
console.log(LCM(9,18));
console.log(LCM(8,5));
console.log(LCM(17,11));
console.log(LCM(20,20));
