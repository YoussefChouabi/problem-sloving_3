/**
 *
 *
 * @param {Array} arr
 * @param {number} value
 * @return {number} 
 */
function countOccurrences(arr , value){
    return arr.filter((a)=>a==value).length;
}
tab1 = [22,4,,33,33,344,2,1,33];
let howmany =countOccurrences(tab1,33);
console.log(howmany);