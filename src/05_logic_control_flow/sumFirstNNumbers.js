/**
 * sumFirstNNumbers()
 * ------------------
 * Write a function called sumFirstNNumbers that takes a number n as an argument and returns the sum of the first n numbers.
 * For example, if n is 3, your function should return 6, because 1 + 2 + 3 = 6.
 * If n is 5, your function should return 15, because 1 + 2 + 3 + 4 + 5 = 15.
 * If n is 0, your function should return 0.
 * If n is negative, your function should return 0.
 **/
function sumFirstNNumbers(n) {
    // Your code here
    let sum = 0;
    for(let i=1; i <=n; i++) {
        sum += i
    }
    return sum;
}


module.exports = sumFirstNNumbers;