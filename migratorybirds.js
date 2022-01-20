// ! NEEDS error fixing to pass all test

/**
 * CHALLENGE ADAPTED FROM hackerank https://www.hackerrank.com/challenges/migratory-birds/
 * @param {} arr 
 * @returns 
 */
function migratoryBirds(arr) {
    // Write your code here
    const sorted = Array.from(new Set(arr)).sort((a, b) => (a - b));
    const largest_2 = sorted.slice(-2);
    // return largest_2;
    const first = arr.filter((value) => value === largest_2[0]).length;
    return first;
    const second = arr.filter((value) => value === largest_2[1]).length;
    if(first === second){
        return largest_2[0];
    }else{
        return first > second ? largest_2[0] : largest_2[1] ;
    }

}
// migratoryBirds([1, 4, 4, 4, 5, 3]);

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))