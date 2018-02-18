function isSmaller(x, y) {
    function isBigger(x, y) {
        return x > y;
    }
    return !isBigger(x, y) && (x != y);
}

// console.log(isSmaller(3, -1));