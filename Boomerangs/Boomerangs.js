Boomerangs = (array) => {
    let counter=0;
    for(i=1; i<array.length-1; i++){
        if(array[i+1]==array[i-1] && array[i-1]!=array[i]){
            counter++;
        }
    }
    return counter;
}

// -------------testing------------
console.log(Boomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(Boomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(Boomerangs([4, 4, 4, 9, 9, 9, 9]));
