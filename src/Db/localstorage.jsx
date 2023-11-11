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
export { getStoreDonateItems, storeInLocalStorage };
