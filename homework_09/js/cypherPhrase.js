function cypherPhrase(obj, str) {
    var newArr = getTransformedArray(str, function(r) {
        return obj[r] || r;
    });
    return newArr.join("");
}
