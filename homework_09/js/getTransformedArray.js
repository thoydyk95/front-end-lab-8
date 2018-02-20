function funEl(el) {
    return el + 1;
}
function getTransformedArray(arr, funEl) {
    let newArr = [];
    arr.forEach(function(arr) {
        newArr.push(funEl(arr));
    });
    return newArr;
}
