// Get percentage Increase / Decrease

const arr = [10, 10, 20, 10, 51, 35, 43, 68, 84, 3];
const sumFromYesterday = arr.splice(1, 5).reduce((x, y) => x + y);
const sumFromToday = arr.splice(0, 4).reduce((x, y) => x + y);
console.log("sum = ", sumFromYesterday, sumFromToday);

export const getPercentage = (numA, numB) => {
  return ((numA - numB) / numB) * 100;
};

// Get sum of array values
export const getSumFromArray = (arr) => {
  return arr.reduce((x, y) => x + y);
};

console.log(getPercentage(sumFromYesterday, sumFromToday).toFixed(2));
