/**
 *
 *
 * @param {Array} arr
 * @return {Array} 
 */
function toUpperCaseArry(arr){
    return arr.map((char)=>char.toUpperCase());
}

tab =['y','o','u','s','s','f','c','h','o','u','a','b','i'];
tabUpper=toUpperCaseArry(tab);
console.log(tabUpper);