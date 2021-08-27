'use strict'

function inverse(array, start = 0) {
    let reversedPart;
    start > 0 ? reversedPart = array.splice(start, array.length) : reversedPart = array.splice(0, array.length + start);
    reversedPart.reverse();
    return start > 0 ? array.concat(reversedPart) : reversedPart.concat(array);
}
