export const setLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, data);
}
export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
}
export const removeKeyLocalStorage = (key: string): any => {
  return localStorage.removeItem(key);
}