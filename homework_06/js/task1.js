window.onload = function() {
    var a = parseFloat(prompt("First side of tiangle is:", "0"));
    var b = parseFloat(prompt("Second side of tiangle is:", "0"));
    var c = parseFloat(prompt("Third side of tiangle is:", "0"));
    var p = (a + b + c) / 2;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    var teoremPifag = Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) || Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) || Math.pow(a, 2) == Math.pow(c, 2) + Math.pow(a, 2);

    function inspectType() {
        if (a > 0 && b > 0 && c > 0) {
            typeTr();
        } else {
            console.log('Incorrect data');
        }
    }
    inspectType();

    function typeTr() {
        if (a == b && b == c && a == c) {
            console.log('Type of triangles - "Equilateral".');
        } else if (a == b && a != c || a == c && a != b || b == c && b != a) {
            console.log('Type of triangles - "Isosceles".');
        } else if (a != b != c) {
            console.log('Type of triangles - "Scalene".');
        }
        if (teoremPifag) {
            console.log('Type of triangle - "Right triangle".');
        }
    }
    if (s > 0) {
        console.log('Square is ' + s.toFixed(2));
    } else {
        console.log('Incorrect data');
    }

}
