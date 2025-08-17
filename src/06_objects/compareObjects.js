/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same 
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1 
 * @param {*} obj2 
 */
function compareObjects(obj1, obj2) {
    // Your code here
    
    if(typeof obj1 === typeof obj2)  {
        let flag = true;
        if(Object.keys(obj1).length != Object.keys(obj2).length) {
            return false;
        }
        Object.keys(obj1).forEach((key) => {
            if( typeof obj1[key] === "object" && typeof obj2[key] === "object") {
                flag = compareObjects(obj1[key], obj2[key]);
            } else {
                flag = obj1[key] === obj2[key] ? true : false;
            }
            if (!flag) {
                return flag;
            }
        })
        return flag;
    }
    return false;
}
  
module.exports = compareObjects;
  