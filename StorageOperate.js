// @author 等鱼
// fishSessionStorage 暂时存储操作对象
export const fishSessionStorage = {
  get: (key) => JSON.parse(window.sessionStorage.getItem(key)),
  set: (key, value) => window.sessionStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => window.sessionStorage.removeItem(key)
};
// @author 等鱼
// fishLocalStorage 永久存储操作对象
export const fishLocalStorage = {
  get: (key) => JSON.parse(window.localStorage.getItem(key)),
  set: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => window.localStorage.removeItem(key)
};
// @author 等鱼
// fishExpireLocalStorage 可过期存储操作对象
export const fishExpireLocalStorage = {
  get(key) {
    const item = fishLocalStorage.get(key);
    if (!item) return null;
    if (item.expire && Date.now() > (item.ct + item.expire)) {
      fishLocalStorage.remove(key);
      return null;
    }
    return item.data;
  },
  set(key, value, expire) {
    fishLocalStorage.set(key, {
      ct: Date.now(),
      expire,
      data: value
    })
  },
  remove(key) {
    fishLocalStorage.remove(key);
  }
};
// @author 等鱼
// 时间字典
export const TimeDict = {
  ONEHOUR: 1000 * 60 * 60,
  ONEDAY: 1000 * 60 * 60 * 24,
  ONEMINUTES: 1000 * 60,
  ONESECOND: 1000
}