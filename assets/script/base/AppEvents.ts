import { ErrorCodes } from "./ErrorCodes";
import xx from "@xxyy/app";
import { IAppEvents } from "@xxyy/app";

export class AppEvents implements IAppEvents {
  public onGlobalError(message: string, code: string, data: any) {
    // 客户端未处理异常
    if (code == ErrorCodes.C_UnhandledErr) {
      xx.logger.error(code, `客户端未处理异常(必须处理): ${message}`, data);
      return;
    }
    // 服务端未处理异常
    if (code == ErrorCodes.G_UnhandledException) {
      xx.logger.error(code, `服务端未处理异常(必须处理): ${message}`, data);
      return;
    }
    // 客户端自定义异常CustomError
    xx.logger.error(code, `客户端自定义异常(必须处理): ${message}`, data);
  }

  // public appSocketInitFunc(socket: xx.XWebSocket) {
  //   ws.init(socket);
  // }
  // public onAppSocketOpen(event: xx.WSEvent) {
  //   xx.logger.info('RWS> connect', event.target.url);
  // }
  // /** 没有register的commandId才回调 */
  // public onAppSocketMessage(cmdid: number, data: Uint8Array) {
  //   //心跳
  //   if (cmdid == 0) {
  //     //this.logger.debug('心跳');
  //     return;
  //   }
  //   // 服务端未处理异常
  //   if (cmdid == -1) {
  //     var rsp = ws.ProtoResponse.decode(data);
  //     this.onGlobalError(rsp.Message, rsp.Code, rsp);
  //     xx.app.authApi?.logClient(3, rsp, true);
  //     return;
  //   }
  // }
  // public onAppSocketError(event: xx.WSErrorEvent) {
  //   if (event.code == ErrorCodes.C_AppSocketConnectErr) {
  //     this.onGlobalError(event.message, event.code, event.target);
  //     return;
  //   }
  //   if (!event.code && !event.message) {
  //     return;
  //   }
  //   xx.logger.error(event.message, event.code);
  // }
  // public onAppSocketClose(event: xx.WSCloseEvent) {

  // }
}
