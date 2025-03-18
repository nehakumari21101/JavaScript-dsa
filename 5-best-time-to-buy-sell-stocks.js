// Brute force

// function maxProfit(prices) {
//   let globalProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];

//       if (currentProfit > globalProfit) globalProfit = currentProfit;
//     }
//   }

//   return globalProfit;
// }

// console.log(maxProfit([7, 6, 4, 3, 1]));

// Greedy algorithm

const maxProfit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }

  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));