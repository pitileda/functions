// Given a sequence of integers as an array, 
// determine whether it is possible to obtain 
// a strictly increasing sequence by removing 
// no more than one element from the array.


function solution(sequence) {
    let temp = sequence;
    let count = 0;
    let i = 0;
    do{
        if(i + 1 > temp.length - 1) {
            break;
        } 
        if(temp[i] >= temp[i+1]) {
            count++;
            if(count > 1) {
                return false;
            }
            //end of array
            if (i+2 > temp.length) {
                temp.splice(i+1, 1);
            }
            // middle of array           
            if (temp[i] >= temp[i+2]) {
                temp.splice(i, 1);
            } else {
                temp.splice(i+1, 1);
            }
            if( (i-1 >= 0) && (temp[i-1] >= temp[i]) ) {
                return false;
            }
            continue;
        }
        i++;
    } while(i < sequence.length - 1);
    if(count > 1) {
        return false;
    }
    return true;   
}

console.assert(solution([1, 2, 3, 4, 3]) === true, "1");
console.assert(solution([1, 2, 3, 4, 3, 6]) === true, "2");
console.assert(solution([1, 3, 2, 1]) === false, "3");
console.assert(solution([10, 1, 2, 3, 4, 5]) === true, "4");
console.assert(solution([1, 3, 2]) === true, "5");
console.assert(solution([1, 2, 1, 2]) === false, "6");
console.assert(solution([1, 2, 3, 4, 5, 3, 5, 6]) === false, "7");