function reverseNumber(x) {
    let res = null;
    x = x + "";
    if (x > 0) {
        res = +x.split("").reverse().join("");
        return res;
    } else {
        res = +("-" + x.split("").reverse().join("").slice(0, -1));
        return res;
    }
}

// console.log(reverseNumber(-1100));
