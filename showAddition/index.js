module.exports.showAdditions = (num = 0) => {
    if (num === 0) return '0';

    let res = '';
    for (let order = `${num}`.length - 1; order >= 0; order--) {
        const fullOrder = (Math.trunc(num/Math.pow(10, order)) * Math.pow(10, order))
        if (Math.trunc(num/Math.pow(10, order)) > 0) {
            res += '+' + fullOrder;
            num -= fullOrder;
        }
    }

    return res.substring(1, res.length);
}