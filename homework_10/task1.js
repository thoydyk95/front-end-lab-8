/**
 * Your debounce function goes here
 * function(){}
 */
function debounce(callBack, delay) {
    let timerId;
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(callBack, delay);
    }
}

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'
