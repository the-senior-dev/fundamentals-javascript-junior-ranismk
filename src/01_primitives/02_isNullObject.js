/**
 * Returns true if the given variable is null and typeof returns 'object'.
 * 
 * @param {*} variable - The variable to be checked.
 * @returns {boolean} - True if the variable is null and typeof returns 'object'.
 */
function isNullObject(variable) {
    // Your code here
    let result = variable === null ?  true :  false;
    return result;
  }
  
  module.exports = isNullObject;
  