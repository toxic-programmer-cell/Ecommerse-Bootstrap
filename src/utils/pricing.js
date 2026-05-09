export function formatCurrency(value, currency = "USD", locale = "en-US") {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) return "";
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    numberValue
  );
}

export function getDiscountedPrice(price, discountPercentage) {
  const p = Number(price);
  const d = Number(discountPercentage);
  if (!Number.isFinite(p) || !Number.isFinite(d) || d <= 0) return null;

  const discounted = p * (1 - d / 100);
  // typical ecommerce rounding to 2 decimals
  return Math.round(discounted * 100) / 100;
}
