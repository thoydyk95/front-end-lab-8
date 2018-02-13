var floors = prompt('Enter a natural number between 0 and 20 : ', '');
var arr = [];
var k = 1;
if (floors == 0 || floors > 20) {
    console.error('Incorrect!');
} else {
    for (var i = 0; i < floors; i++) {
        arr[i] = '   '.repeat(floors - i + 1) + '[~]'.repeat(i + k);
        k++;
        console.log(arr[i]);
    }
}