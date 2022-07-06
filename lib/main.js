"use strict";
exports.__esModule = true;
exports.c_data_storge = void 0;
var unit = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB'];
function c_data_storge(amount, from, to, decimals) {
    var _a;
    if (decimals === void 0) { decimals = 2; }
    if (amount === 0)
        return 0;
    if (from === to)
        return from;
    var fromIdx = unit.indexOf(from);
    var toIdx = unit.indexOf(to);
    var flag = fromIdx < toIdx;
    if (!flag) {
        ;
        _a = [toIdx, fromIdx], fromIdx = _a[0], toIdx = _a[1];
    }
    for (var i = fromIdx; i < toIdx; i++) {
        amount = flag ? amount / 1024 : amount * 1024;
    }
    return amount.toFixed(decimals);
}
exports.c_data_storge = c_data_storge;
console.log(c_data_storge(1, 'GB', 'B'));
