
function flatArr(arr) {
    return arr.flat(Infinity);
}

const input2 = [1, [2, 3], [4, [5]]];
console.log("Flatten Array:", flatArr(input2));
