export const saveCurrencyState = (val : any) => {
  localStorage.setItem('currency', val);
}

export const loadCurrencySate = () => {
  return localStorage.getItem('currency');
}