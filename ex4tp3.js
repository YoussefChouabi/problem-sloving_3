/**
 *
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array} 
 */
function mergeAndSort(arr1,arr2){
    return  arr1.concat(arr2).sort((a,b)=>a-b);
}

tab1 = [22,344,1,4,3];
tab2 = [55,1,6,9,78,6];
finalArr =mergeAndSort(tab1 ,tab2);
console.log(finalArr);