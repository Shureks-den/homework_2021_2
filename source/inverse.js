'use strict';

/**
 * @description inverse inputted array, if the first param not an array returns undefined
 * @param {Array} array - array to be inversed
 * @param {number} start - number of elements to be ignored - positive number elements from start, negative - from end
 * @returns {Array|undefined}
 */
let inverse = (array, start = 0) => {
    if (array === undefined || !Array.isArray(array)) {
        return undefined;
    }
    let arrayCopy = array.slice(); // создаем копию чтобы не ломать исходный массив
    let reversedPart = start > 0 ? arrayCopy.splice(start, arrayCopy.length) : arrayCopy.splice(0, arrayCopy.length + start);
    reversedPart.reverse();
    return start > 0 ? arrayCopy.concat(reversedPart) : reversedPart.concat(arrayCopy);
}
