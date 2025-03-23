/**
 *
 *
 * @param {Array} arr
 * @return {Array} 
 */
function filterEvenNumbers(arr){
    return  arr.filter((a)=> a%2==0);
}
tab = [22,344,1,4,3];
pairs =filterEvenNumbers(tab);
console.log(pairs);