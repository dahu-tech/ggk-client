import LocalStorage from "./LocalStorage";
import { LanguageItem } from "./common/common";
export declare enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}
export class Config {
  // 添加静态实例声明
  private static _instance: Config;
  static get instance() {
    if (!this._instance) {
      this._instance = new Config();
    }
    return this._instance;
  }

  /** 应用程序ID */
  appId: string;
  /** 应用类型：1-大厅 2-游戏 */
  appType: number;
  /** 应用状态0-正常1-维护 */
  appStatus: number;
  /** 系统维护时间文本，如：2020-01-01 10:00:00 - 2020-01-01 12:00:00 */
  appMaintText: string;
  /** 应用连接方式: 1-api+ticket 2-ws */
  appLink: number;
  /** 版本 */
  version: string;
  /** app支持的语言（默认放第一个） */
  languages: LanguageItem[];
  /** 日志级别 */
  logLevel: any;
  /** timer管理器是否有效 */
  timerManagerEnable: boolean;
  /** timer管理器间隔 */
  timerManagerInterval: number;
  stopwatchEnable: boolean;
  stopwatchMilliseconds: number;
  /** 环境变量，获取configs中的子配置项 */
  env: string;
  /** 配置是否显示bonus */
  isShowBonus: boolean;
  /** 平台api地址，如未设置，跳过初始化过程 */
  xxyyUrl: string;
  xxyyTimeout: number;
  /** 是否刷新jwtToken */
  refreshXxyyToken: boolean;
  /** 刷新token间隔默认30分钟 */
  refleshXxyyTokenInterval: number;
  /** 图片基础url */
  imgBaseUrl: string;
  /** 应用服务地址，初始化后返回，本地优先 */
  appUrl: string;
  /** 用户ID，登陆后设置，本地优先 */
  userId: string;
  providerId: string;
  /** 运营商ID（初始化返回，仅大厅设置，本地优先） */
  operatorId: string;
  countryId: string;
  currencyId: string;
  uuid: string;
  accessKey: string;
  accessSecret: string;
  fromMode: number;
  fromId: string;
  lobbyUrl: string;
  depositUrl: string;
  depositFunc: string;
  _currencyType: number;
  _isMobile: any;
  _osType: any;
  _browserType: any;
  constructor() {
    this.appUrl = "http://192.168.1.3:8001";
    this.userId = "eaea583eb8504799a6e684be927f2ffb";
    this.currencyId = "ETB";
    /** 应用类型：1-大厅 2-游戏 */
    this.appType = 2;
    /** 应用状态0-正常1-维护 */
    this.appStatus = 0;
    /** 应用连接方式: 1-api+ticket 2-ws */
    this.appLink = 1;
    /** app支持的语言（默认放第一个） */
    this.languages = null;
    /** 日志级别 */
    this.logLevel = 2;
    /** timer管理器是否有效 */
    this.timerManagerEnable = true;
    /** timer管理器间隔 */
    this.timerManagerInterval = 500;
    this.stopwatchEnable = false;
    this.stopwatchMilliseconds = 500;
    /** 环境变量，获取configs中的子配置项 */
    this.env = "dev";
    this.xxyyTimeout = 5000;
    /** 是否刷新jwtToken */
    this.refreshXxyyToken = false;
    /** 刷新token间隔默认30分钟 */
    this.refleshXxyyTokenInterval = 1800000;
    /** 运营商ID（初始化返回，仅大厅设置，本地优先） */
    this.operatorId = null;
    this.fromMode = 0; // 平台用，用户来源模式
    //#region 常量
    this._currencyType = 0;
    /**移动系统中*/
    this._isMobile = null;
    this._osType = null;
    this._browserType = null;
  }
  /** 平台jwtToken->localStorage */
  get xxyyToken() {
    return LocalStorage.instance.get("xxyy-token", null);
  }
  set xxyyToken(value) {
    LocalStorage.instance.set("xxyy-token", value);
  }
  /** 游戏jwtToken->localStorage */
  get appToken() {
    return LocalStorage.instance.get("app-token", null);
  }
  set appToken(value) {
    LocalStorage.instance.set("app-token", value);
  }
  /** 当前语言->localStorage */
  get langId() {
    return LocalStorage.instance.get("langId", null);
  }
  set langId(value) {
    LocalStorage.instance.set("langId", value);
  }
  get currencyType() {
    if (!this.currencyId) return 0;
    if (this._currencyType != 0) return this._currencyType;
    switch (this.currencyId) {
      case "COIN":
        this._currencyType = 1;
        break;
      case "GOLD":
        this._currencyType = 2;
        break;
      case "POINT":
        this._currencyType = 3;
        break;
      case "SWB":
        this._currencyType = 4;
        break;
      default:
        this._currencyType = 5;
        break;
    }
    return this._currencyType;
  }

  get systemInfo() {
    return new SystemInfomation();
  }
  set isMobile(value) {
    this._isMobile = value;
  }
  get isMobile() {
    if (!this._isMobile) {
      this._isMobile = this.systemInfo.device == 2;
    }
    return this._isMobile;
  }
  set osType(value) {
    this._osType = value;
  }
  get osType() {
    if (!this._osType) {
      this._osType = this.systemInfo.os;
    }
    return this._osType;
  }
  set browserType(value) {
    this._browserType = value;
  }
  get browserType() {
    if (!this._browserType) {
      this._browserType = this.systemInfo.browserType;
    }
    return this._browserType;
  }
}
export declare class SystemInfomation {
  /** 语言 */
  language: string;
  /** 内核 webkit gecko presto trident */
  engine: string;
  /** 内核版本 */
  engineVs: string;
  /** 设备 desktop mobile */
  device: SIDeviceType;
  /** 载体 chrome safari firefox opera iexplore edge */
  browser: string;
  browserType: SIBrowserType;
  /** 载体版本 */
  browserVs: string;
  /** 系统 windows macos linux android ios */
  os: SIOSType;
  /** 系统版本 */
  osVs: string;
  /** 外壳 wechat qq uc 360 2345 sougou liebao maxthon */
  shell: string;
  /** 外壳版本 */
  shellVs: string;
}
export declare enum SIDeviceType {
  unknow = 0,
  desktop = 1,
  mobile = 2,
}
export declare enum SIOSType {
  unknow = 0,
  windows = 1,
  macos = 2,
  linux = 3,
  android = 4,
  ios = 5,
}
export declare enum SIBrowserType {
  unknow = 0,
  opera = 1,
  firefox = 2,
  chrome = 3,
  safari = 4,
  iexplore = 5,
  edge = 6,
}
