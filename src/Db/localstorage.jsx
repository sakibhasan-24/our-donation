const getStoreDonateItems = () => {
  const storedDonate = localStorage.getItem("DonateList");
  if (storedDonate) {
    return JSON.parse(storedDonate);
  }
  return [];
};

const storeInLocalStorage = (donateId) => {
  const storedDonate = getStoreDonateItems();
  const donateItems = storedDonate.find((donate) => donate === donateId);
  storedDonate.push(donateId);
  localStorage.setItem("DonateList", JSON.stringify(storedDonate));
};

const setValueInLocalStorage = (keyName, strValue) => {
  const previousValue = getValue("price");
  const newPreviousValue = Number(previousValue);
  const newValue = newPreviousValue + Number(strValue);
  localStorage.setItem("price", newValue);
};
const getValue = (strValue) => {
  return localStorage.getItem(strValue);
};

export {
  getStoreDonateItems,
  storeInLocalStorage,
  setValueInLocalStorage,
  getValue,
};
