const getStoreDonateItems = () => {
  const storedDonate = localStorage.getItem("DonateList");
  if (storedDonate) {
    return JSON.parse(storedDonate);
  }
  return [];
};

const storeInLocalStorage = (donateId) => {
  const numberDonateId = Number(donateId);
  const storedDonate = getStoreDonateItems();
  const donateItems = storedDonate.find((donate) => donate === numberDonateId);
  if (!donateItems) {
    storedDonate.push(numberDonateId);
    localStorage.setItem("DonateList", JSON.stringify(storedDonate));
  }
};
export { getStoreDonateItems, storeInLocalStorage };
