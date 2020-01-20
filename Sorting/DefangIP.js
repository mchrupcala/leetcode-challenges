/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newAddress = [];
    for (let i = 0; i < address.length; i++) {
        address[i] === '.' ? newAddress.push('[.]') : newAddress.push(address[i]);
    }
    
    return newAddress.join('')
};