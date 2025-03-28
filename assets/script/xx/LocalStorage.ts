export default class LocalStorage {
  private keyPrefix: string = "dh";
  private static _instance: LocalStorage;
  static get instance() {
    if (!this._instance) {
      this._instance = new LocalStorage();
    }
    return this._instance;
  }

  set(key: string, value: any) {
    key = this.getKey(key);
    value = this.stringify(value);
    window.localStorage.setItem(key, value);
  }
  get(key: string, defval = null) {
    key = this.getKey(key);
    let value = window.localStorage.getItem(key);
    return value === null ? defval : this.parse(value);
  }
  has(key: string) {
    return window.localStorage.getItem(this.getKey(key)) !== null;
  }
  get length() {
    return window.localStorage.length;
  }
  remove(key: string) {
    window.localStorage.removeItem(this.getKey(key));
  }
  clear() {
    window.localStorage.clear();
  }

  getKey = (key: string) => {
    return `${this.keyPrefix}_${key}`;
  };
  stringify(value: any) {
    if (typeof value === "function") {
      throw new Error("不支持 function 类型");
    }
    try {
      return JSON.stringify(value);
    } catch (e) {
      throw new Error(`入参${value}可能存在环，导致 JSON.stringify(value) 失败`);
    }
  }
  parse(value: string) {
    return JSON.parse(value);
  }
  getParamValue(url, name) {
    let value = url.searchParams.get(name);
    return this.parse(value);
  }
}
