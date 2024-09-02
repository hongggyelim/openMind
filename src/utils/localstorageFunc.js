export function setLocalstorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalstoage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

export function removeLocalstarage(key) {
  localStorage.removeItem(key);
}
