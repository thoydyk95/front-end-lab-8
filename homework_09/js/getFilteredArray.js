function predicateFunction(el) {
    return el > 3;
}
function getFilteredArray(arr, predicateFunction) {
    let newArr = [];
    forEach(arr, function(arr) {
        if (predicateFunction(arr)) {
            newArr.push(arr);
        }
    });
    return newArr;
}
