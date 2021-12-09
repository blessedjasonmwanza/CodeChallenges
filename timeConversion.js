/**
 * Solution to hackerank challenge
 * https://www.hackerrank.com/challenges/time-conversion/problem
 * @param {*} s 
 * @returns string
 */
function timeConversion(s) {
    // Write your code here
    let [h, m, ss] = s.split(':');
    const stamp = ss.slice(-2).toLowerCase();
    ss = ss.slice(0, 2);
    if(stamp === 'pm'){
        h = parseInt(h);
        if(h == 12){
            s = `${h}:${m}:${ss}`;
        }else{
            h = h + 12;
            s = `${h}:${m}:${ss}`;
        }
    }else {
        if( h === '12' && stamp === 'am' ){
            s = `00:${m}:${ss}`;
        }else{
            s = `${h}:${m}:${ss}`;
        }
    }
    return s;
}
console.log(timeConversion('12:40:22AM'));
