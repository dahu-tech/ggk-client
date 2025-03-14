import { Config } from "./Config";
import LocalStorage from "./LocalStorage";
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
