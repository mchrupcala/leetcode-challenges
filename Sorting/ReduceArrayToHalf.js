/**
 * @param {number[]} arr
 * @return {number}
 */
//17 mins in, finished but time limit exceeded

// var minSetSize = function(arr) {
//     let count = 0;
//     let dictObj = {};
    
//     for (num of arr) {
//         if (Object.keys(dictObj).includes(num.toString())) {
//             dictObj[num] += 1;
//         } else {
//             dictObj[num] = 1;
//         }
//     }
    
    
//     let newArr = arr.slice(0);
//     while (newArr.length > (Math.floor(arr.length/2)) && newArr.length > 0) {
//         let max = 0;
//         let maxKey = null;

//         for ([key, val] of Object.entries(dictObj)) {
//             if (val > max) {
//                 max = val;
//                 maxKey = key;
//             }
//         }

//         newArr = newArr.filter(i => {
//             return i !== parseInt(maxKey)
//         })
//         delete dictObj[maxKey]

//         count += 1;
//     }

    
//     return count;
// };


//SAMPLE SOLUTION -->

const minSetSize = arr => {
    const LEN = arr.length;
    if (LEN < 3) return 1;
  
    const max = Math.max(...arr);
    console.log("Max: ", max);
    const freq = new Uint16Array(max + 1);
    console.log("Freq: ", freq);
    for (const val of arr) ++freq[val];
    console.log("Newfreq: ", freq);
  
    let step = 0;
    let sum = 0;
    freq.sort((a, b) => b - a);
    console.log("Sorted freq: ", freq);
    for (const val of freq) {
      sum += val;
      ++step;
      if (sum >= LEN / 2) return step;
    }
  };