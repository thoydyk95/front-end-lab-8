let m = 0;
function getClosestToZero(...arr) {
    let num = arr.sort((x,y)=>Math.abs(m - x) - Math.abs(m - y))[0];
    return num;
}
//console.log(getClosestToZero(2.4, 3, 7, -1, -10, 0.5));
