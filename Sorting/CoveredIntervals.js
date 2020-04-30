var removeCoveredIntervals = function(intervals) {
    //O(n^2) solution --> for each interval, compare all other intervals
    
    //if I sort based on one element...say, a...then I can test all elements to the right based on the first int. Any that fail the test, I can skip testing the second element. ..but I still need to compare it against all other elements. Not sure f sorting will help.
    
    //^^no, my instnct was right. Sorting made this more efficient for sure. I'll want to research sorting better.
    
    //I got my solution closer. Basically the sorting is necessary - I have to compare the smallest element from what it looks like. Right now i'm failing a test case where there's two inputs: I'm comparing the left to right, but I should be comparing right to left.
    
    let count = 1;
    intervals.sort((interval1, interval2) => (interval1[0] === interval2[0] ? interval2[1] - interval1[1] : interval1[0] - interval2[0]));
    let latest = intervals[0];
    //MY SOLUTION (DOESN'T WORK)
    
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        if (!(current[0] >= latest[0] && current[1] <= latest[1])) {
            // console.log('made it!');
            latest = current;
            count += 1;
            }
        }
    //     // console.log(intervals);
    return count;
    }
    

    
//     const l = intervals.length;
// 	// guarantee by the constraints
//     let count = 1;
//     let latest;
//     let current;
    
// 	// sort
//     intervals.sort((interval1, interval2) => (interval1[0] === interval2[0] ? interval2[1] - interval1[1] : interval1[0] - interval2[0]));
//     console.log(intervals);
//     latest = intervals[0];
    
// 	// scan
//     for (let i = 1; i < l; i++) {
//         current = intervals[i];
        
//         if (!(current[0] >= latest[0] && current[1] <= latest[1])){
//             latest = current;
//             count++;
//         }
//     }
    
//     return count;