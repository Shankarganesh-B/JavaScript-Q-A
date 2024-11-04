
function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

const input3 = [1, 2, 3, 4, 5, 1];
console.log("Contains Duplicates:", hasDuplicates(input3));
