VowelLinks=(str)=>{
    var array= [...str]
    for(i=0; i<array.length; i++){
        if(array[i]==' ' && /[aeiou]/.test(array[i-1]) && /[aeiou]/.test(array[i+1])) return true
    }
    return false
}


//------------------testing----------------------
console.log(VowelLinks("a very large appliance"));
console.log(VowelLinks("go to edabit"));
console.log(VowelLinks("an open fire"));
console.log(VowelLinks("a sudden applause"));
