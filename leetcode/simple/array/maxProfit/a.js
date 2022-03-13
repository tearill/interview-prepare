/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }
    let total = 0, index = 0, min = 0, length = prices.length;
    while (index < length) {
        // 找到后一项 - 前一项 > 0，也就是开始上涨、买入的位置
        while (index < length - 1 && prices[index] >= prices[index + 1]) {
            index++;
        }

        // 买入价
        min = prices[index];

        // 买入之后开始下跌的位置，卖出的位置
        while (index < length - 1 && prices[index] <= prices[index + 1]) {
            index++;
        }

        // 卖出 - 买入
        total += prices[index++] - min;
    }
    return total;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));