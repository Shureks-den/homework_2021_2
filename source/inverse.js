'use strict';

/**
 * @description make a deepcopy of an object or array
 * @param {any} origin - object to be deepcopied
 * @returns {any} full independent copy
 */
const deepCopyFunc = (origin) => {
    if (typeof origin !== "object" || origin === null) {
        return origin; // возвращаем простой тип
    }
    // создаем пустую копию mutable 
    let deepCopy = Array.isArray(origin) ? [] : {};
  
    for (const key in origin) {
        const value = origin[key];
        deepCopy[key] = deepCopyFunc(value) // рекурсивный вызов для вложенных mutable
    }
    return deepCopy;
}

/**
 * @description inverse inputted array, if the first param not an array returns undefined
 * @param {Array} array - array to be inversed
 * @param {number=} start - number of elements to be ignored - positive number elements from start, negative - from end
 * @returns {Array|undefined}
 */
const inverse = (array, start = 0) => {
    if (array === undefined || !Array.isArray(array)) {
        return undefined;
    }
    let arrayCopy = deepCopyFunc(array); // создаем копию чтобы не ломать исходный массив
    let reversedPart = start > 0 ?
        arrayCopy.splice(start, arrayCopy.length) :
        arrayCopy.splice(0, arrayCopy.length + start);
    reversedPart.reverse();
    return start > 0 ? arrayCopy.concat(reversedPart) : reversedPart.concat(arrayCopy);
}
