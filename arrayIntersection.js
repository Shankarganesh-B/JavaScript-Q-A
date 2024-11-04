
function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

const input7A = [1, 2, 3];
const input7B = [2, 3, 4];
console.log("Intersection:", arrayIntersection(input7A, input7B));
