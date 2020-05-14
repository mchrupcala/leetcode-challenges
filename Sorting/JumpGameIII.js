var canReach = function(arr, start) {
    if (arr.length === 0) return false;
    let tested = [];
    let queue = [];
    let isCanReach = false;
    
    queue.push(start);
    while (queue.length !== 0) {
        let current = queue.shift();
        if (!tested.includes(current)) {
            if (arr[current] === 0) {
            isCanReach = true;
            break;
            }
            if (current + arr[current] < arr.length) {
                queue.push(current + arr[current]);
            }

            if (current - arr[current] >= 0) {
                queue.push(current - arr[current]);
            }

            tested.push(current);
            }

    }
    
    return isCanReach;
};