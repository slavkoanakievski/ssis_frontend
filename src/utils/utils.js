export const replaceObj = function (newObject, oldObject, array) {
    let index = array.findIndex(x => x === oldObject);
    let firstPart = array.slice(0, index);
    let secondPart = array.slice(index + 1);
    return [...firstPart, newObject, ...secondPart];
};