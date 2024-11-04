
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const input8 = [1, 2, 3, 4, 5];
console.log("Sum of Array Elements:", sumArray(input8));
