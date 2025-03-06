import { ErrorCodes } from "./ErrorCodes";
import { IAppEvents } from "../xx/App";

export class AppEvents implements IAppEvents {
  public onGlobalError(message: string, code: string, data: any) {
    // 客户端未处理异常
    if (code == ErrorCodes.C_UnhandledErr) {
      console.error(code, `客户端未处理异常(必须处理): ${message}`, data);
      return;
    }
    // 服务端未处理异常
    if (code == ErrorCodes.G_UnhandledException) {
      console.error(code, `服务端未处理异常(必须处理): ${message}`, data);
      return;
    }
    // 客户端自定义异常CustomError
    console.error(code, `客户端自定义异常(必须处理): ${message}`, data);
  }
}
