function forEach(arr, funEl) {
    for (let i = 0; i < arr.length; i++) {
        funEl(arr[i]);
    }
}
function funEl(el) {
    console.log(el);
}
