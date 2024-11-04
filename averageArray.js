
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const input10 = [1, 2, 3, 4, 5];
console.log("Average of Array Elements:", averageArray(input10));
