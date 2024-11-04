
function mergeObjs(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const input4A = { a: 1, b: 2 };
const input4B = { b: 2, c: 4 };
console.log("Merged Object:", mergeObjs(input4A, input4B));
