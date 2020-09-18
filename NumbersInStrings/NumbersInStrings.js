function numInStr(array) {
	return array.filter(item => {
		for (c of item){
			if (c.charCodeAt(0)>47 && c.charCodeAt(0)<58){
				return item;
			}
		}
	})
}

//---------------------testing----------------------
console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));

console.log(numInStr(["this is a test", "test1"]));
