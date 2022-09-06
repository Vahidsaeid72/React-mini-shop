export const formatCurrency = (num) => {
  return Number(num.toFixed(3)).toLocaleString() + " تومان";
};
