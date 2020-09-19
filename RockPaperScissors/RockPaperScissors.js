calculateScore= (array) => {
    let i=0 ,j=0;
    array.forEach(element => {
        if(element[0]=='R' && element[1]=='S' || element[0]=='S' && element[1]=='P' || element[0]=='P' && element[1]=='R') i++
        else if(element[0]=='S' && element[1]=='R' || element[0]=='P' && element[1]=='S' || element[0]=='R' && element[1]=='P') j++
    });
    if(i==j) return 'tie'
    return (i>j ? 'Abigail' : 'Benson');
}

//--------------------------testing----------------------------------
console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]));
console.log(calculateScore([["R", "R"], ["P", "S"]]));
console.log(calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]));