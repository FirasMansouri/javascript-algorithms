doubleSwap=(str, char1, char2)=>{
    var array= [...str];
    array.map((element, index, array) => {
        if(element==char1) array[index]=char2
        else if(element==char2) array[index]=char1
    });
    return array.join("");
}

//-----------------testing---------------------
console.log(doubleSwap( "aabbccc", "a", "b"));
console.log(doubleSwap( "random w#rds writt&n h&r&", "#", "&"));
console.log(doubleSwap( "128 895 556 788 999", "8", "9"));


