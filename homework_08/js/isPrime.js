function isPrime(x) {
    for (var i = 2; i < x; i++) {
        if (xr % i === 0) {
            return false;
        }
    }
    return x > 1;
}
//console.log(isPrime(-1.7));
