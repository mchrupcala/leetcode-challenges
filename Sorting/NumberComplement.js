var findComplement = function(num) {
    let bin = (num >>> 0).toString(2);
    let newBin = '';
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            newBin += '0'
        } else {
            newBin += '1'
        }
    }
    newBin = parseInt(newBin, 2);
    return newBin;
};