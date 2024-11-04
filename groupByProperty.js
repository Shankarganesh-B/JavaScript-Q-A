
function groupByProperty(arr, prop) {
    return arr.reduce((acc, obj) => {
        (acc[obj[prop]] = acc[obj[prop]] || []).push(obj);
        return acc;
    }, {});
}

const input6 = [ { id: 1, category: 'fruit' }, { id: 2, category: 'vegetable' }, { id: 3, category: 'fruit' } ];
console.log("Grouped Objects:", groupByProperty(input6, 'category'));
