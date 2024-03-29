export const FormatPrice = (price, currency) => {
  // Форматування ціни з фіксованою кількістю десяткових знаків та додаванням символу валюти
  return `${price.toFixed(2)} ${currency}`; // toFixed(2) використовується для відображення ціни з двома знаками після коми
};

