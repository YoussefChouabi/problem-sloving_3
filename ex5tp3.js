/**
 *
 *
 * @param {Array} arr
 * @return {Array} 
 */
function removeDuplicates(arr){
    return Array.from(new Set(arr))
}

tab1 = [22,4,344,2,1,33,3,3,344,1,4,3];
finalArr =removeDuplicates(tab1);
console.log(finalArr);