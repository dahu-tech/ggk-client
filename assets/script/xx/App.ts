import { Config } from "./Config";
import LocalStorage from "./LocalStorage";
// import * as i18n from "db://i18n/LanguageData";
export interface IAppEvents {
  onGlobalError(message: string, code: string, data: any): any;
}
export class App {
  public _getLocalUrlParams: Function;
  private _config: Config;
  appEvents: IAppEvents;
  /** 全局配置数据 */
  get config() {
    return this._config;
  }
  private _url: string;
  /** 当前URL */
  get url() {
    return this._url;
  }
  constructor() {
    this._getLocalUrlParams = () => {
      let URL = window.location.href;
      let search = URL.split("?")[1];
      const urlSearchParams = new URLSearchParams(search);
      const params = {};
      for (const [key, value] of urlSearchParams) {
        params[key] = value;
      }
      return params;
    };
    this._config = Config.instance;
    // Config.instance.appUrl = "http://192.168.1.3:8001"; // BASE_URL;
    // Config.instance.appUrl = "https://game-api.megalake.games"; // 日常BASE_URL;
    Config.instance.appUrl = "https://g-api.vivagameclub.com"; // 生产BASE_URL;
    // Config.instance.currencyId = "ETB";
    Config.instance.currencyId = this._getLocalUrlParams().currency;
    // Config.instance.userId = "eaea583eb8504799a6e684be927f2ffb";
    Config.instance.userId = this._getLocalUrlParams().uid;
    Config.instance.appToken = this._getLocalUrlParams().token || null;
    this._url = window.location.href;
  }
  /**
   * init
   */
  public async init(events) {
    this.appEvents = events;
    console.log(";????");
  }
  start() {
    // game登录
    console.log(this._config.appType, this._config.appLink);

    if (this._config.appType == 2 && this._config.appLink == 1) {
      this.gameLogin();
    }
  }
  gameLogin() {
    let json = {
      appId: this._config.appId,
      userId: this._config.userId,
      ticket: LocalStorage.instance.getParamValue(this.url, "ticket"),
    };
    console.log("gameLogin", json);
  }
}
