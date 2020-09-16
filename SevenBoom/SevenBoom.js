SevenBoom = (array) => (array.join().includes('7') ? "Boom!" : "there is no seven in the array");
console.log(SevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(SevenBoom([8, 6, 33, 100]));
console.log(SevenBoom([2, 55, 60, 97, 86]));