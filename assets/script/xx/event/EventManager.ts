import { EventData } from "./EventData";
export class EventManager {
  private static _instance: EventManager;
  private static _events = new Map();
  /**
   * 注册全局事件
   * @param event(string)      事件名
   * @param listener(function) 处理事件的侦听器函数
   * @param thisObj(object)    侦听函数绑定的this对象
   */
  public static on(event: string, listener: (event: string, args: any) => void, thisObj: Object) {
    let data = new EventData();
    data.event = event;
    data.listener = listener;
    data.thisObj = thisObj;
    this.onEvent(data);
  }
  public static onEvent(data: EventData) {
    if (!data.event || !data.listener) {
      console.error(`注册【${data.event}】事件的侦听器函数为空`);
      return;
    }
    let list = this._events.get(data.event);
    if (!list) {
      list = [];
      this._events.set(data.event, list);
    }
    list.forEach((element) => {
      if (element.listener == data.listener && element.thisObj == data.thisObj) {
        console.warn(`名为【${event}】的事件重复注册侦听器`);
      }
    });
    list.push(data);
  }
  /**
   * 监听一次事件，事件响应后，该监听自动移除
   * @param event
   * @param listener
   * @param thisObj
   */
  public static once(event: string, listener: (event: string, args: any) => void, thisObj: Object) {
    let _listener = ($event, $args) => {
      this.off(event, _listener, thisObj);
      _listener = null;
      listener.call(thisObj, $event, $args);
    };
    this.on(event, _listener, thisObj);
  }
  /**
   * 移除全局事件
   * @param event(string)      事件名
   * @param listener(function) 处理事件的侦听器函数
   * @param thisObj(object)    侦听函数绑定的this对象
   */
  public static off(event: string, listener: (event: string, args: any) => void, thisObj: Object) {
    let list = this._events.get(event);
    if (!list) {
      console.warn(`名为【${event}】的事件不存在`);
      return;
    }
    for (let i = 0; i < list.length; i++) {
      let bin = list[i];
      if (bin.listener == listener && bin.thisObj == thisObj) {
        list.splice(i, 1);
        break;
      }
    }
    if (list.length == 0) {
      this._events.delete(event);
    }
  }
  /** 移除对象的全部事件 */
  public static remove(thisObj: Object) {
    this._events.forEach((value, key) => {
      let list = this._events.get(key);
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        if (item.thisObj == thisObj) {
          list.splice(i, 1);
          i--;
        }
      }
      if (list.length == 0) {
        this._events.delete(key);
      }
    });
  }
  /**
   * 触发全局事件
   * @param event(string)      事件名
   * @param arg(any)           事件参数
   */
  public static emit(event: string, arg = null) {
    let list = this._events.get(event);
    if (list) {
      let tempList = list.concat();
      for (const bin of tempList) {
        bin.listener.call(bin.thisObj, event, arg);
      }
    }
  }
  public static destroy() {
    this._events.clear();
  }
}
