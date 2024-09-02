export const setLocalstorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalstoage = key => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

export const removeLocalstarage = key => {
  localStorage.removeItem(key);
};
