const STORAGE_KEY = 'm_token';

export const getStorageToken = () => {
  return localStorage.getItem(STORAGE_KEY);
}

export const setStorageToken = (token: string) => {
  localStorage.setItem(STORAGE_KEY, token);
  return;
}

export const removeStorageToken = () => {
  localStorage.removeItem(STORAGE_KEY);
  return;
}
