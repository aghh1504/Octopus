export function formatPrice(price) {
  if (!price || price.amount === null || !price.currency) {
    return "";
  }

  if (price.amount < 0) {
    return `-${price.currency}${parseFloat(Math.abs(price.amount))}`;
  }
  return `${price.currency}${parseFloat(price.amount)}`;
}
