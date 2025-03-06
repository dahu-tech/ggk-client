/** 语言项 */
export declare class LanguageItem {
  /** 语言编码ISO 639-1 小写 */
  id: string;
  /** 描述 */
  title: string;
}
/**运行模式 */
export declare enum RunningMode {
  /**普通 */
  Normal = 0,
  /**仿真 */
  Staging = 1,
  /**联调 */
  Debug = 2,
}
/**用户登录模式 */
export declare enum UserMode {
  Unknow = 0,
  /**游客 */
  Visitor = 1,
  /**普通用户 */
  User = 2,
}
/**用户类型 */
export declare enum UserKind {
  /**未知 */
  Unknow = 0,
  /**开发调试用户 */
  Dev = 1,
  /**普通用户 */
  User = 2,
  /**线上测试用户（调用第三方扣减） */
  Tester = 3,
  /**线上测试用户（不调用第三方扣减） */
  LocalTester = 4,
  /**仿真测试人员 */
  Staging = 5,
  /**联调测试用户 */
  Debug = 6,
  /**管理员 */
  Admin = 9,
}
/**用户状态 */
export declare enum UserStatus {
  /**未知 */
  Unknown = 0,
  /**正常 */
  Normal = 1,
  /**异常关闭 */
  ExClose = 2,
  /**系统关闭 */
  SysClose = 9,
}
/**货币类型 */
export declare enum CurrencyType {
  Unknow = 0,
  Coin = 1,
  Gold = 2,
  Point = 3,
  SWB = 4,
  Cash = 9,
}
/** 平台标识 */
export declare enum OSPlatform {
  /**H5程序 */
  Html5 = 0,
  /**打包程序 */
  Native = 1,
}
/** 推广模式 */
export declare enum FromMode {
  Operator = 0,
  UserId = 1,
  Channel = 2,
}
