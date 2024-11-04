
function removeFalsy(arr) {
    return arr.filter(Boolean);
}

const input9 = [0, 1, false, 2, '', 3];
console.log("Array without Falsy Values:", removeFalsy(input9));
