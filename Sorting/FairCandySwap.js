/*
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    //A = [1,2], B = [3,4]
    //my answer: [1, 3]
    
    //Naive solution-
    let aliceSum = 0;
    let bobSum = 0;
    
    //Loop each array, summing each.
    for (let i = 0; i < A.length; i++) {
        aliceSum += A[i];
    }
    for (let j = 0; j < B.length; j++) {
        bobSum += B[j];
    }
    
    //loop AlceCandy. for each element, for each bob[j], can I swap with bob to update both totals so they're equal value?
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if ((aliceSum + B[j] - A[i]) === (bobSum - B[j] + A[i])) {
                return [A[i], B[j]]
            }            
        }
    }
    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if ((bobSum - B[i] + A[j]) === (aliceSum + B[i] - A[j])) {
                return [A[j], B[i]]
            }
        }
    }

    
    
};
 /* const A = [1,2]
const B = [3,4]

console.log(faircandySwap(A, B)); */