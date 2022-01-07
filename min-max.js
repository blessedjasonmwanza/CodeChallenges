// PROBLEM ADAPTED FROM HACKERRANK
/**
 * 
 * Given five positive integers, find the minimum and 
 * maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum 
 * values as a single line of two space-separated long integers.
 */
// SOLUTION
function miniMaxSum(arr) {
    // Write your code here
    arr = arr.sort((a,b) => a-b);
    const min_arr = arr.slice(0, -1).reduce((total, currentNum) => total+currentNum);
    const max_arr = arr.slice(1, arr.length).reduce((total, currentNum) => total+currentNum);
    console.log(min_arr, max_arr);
}

const arr = [7, 69, 2, 221, 8974];
miniMaxSum(arr);
