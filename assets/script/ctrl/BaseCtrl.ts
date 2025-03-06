import { Asset, AssetManager, Button, Component, Node } from "cc";
import { GComponent, GObject } from "fairygui-cc";
import { BaseAni } from "../ani/BaseAni";
import { EventManager } from "../xx/event/EventManager";

export abstract class BaseCtrl {
  public _view: GObject;

  // get view(){
  //     return this._view;
  // }

  // set view( view : GObject ){
  //     this._view = view;
  // }

  private _events: Map<string, Function> = new Map();

  public abstract isMain: boolean;
  public abstract bundle: string;
  public abstract pkgName: string;
  public abstract resName: string;
  public abstract layer: number;
  public aniType: number = 0;
  public ani: BaseAni;

  public constructor() {}

  public abstract onPkgLoad(): void;

  public abstract onViewAdd(): void;

  public abstract closeView(): void;

  public abstract beforeViewRemove(): void;

  public onDestroy(): void {
    EventManager.remove(this);
    this._events.clear();
  }

  //#region events
  protected addEvent(name: string, callback: any) {
    if (this._events.has(name)) {
      console.error(`UICtrl.addEvent 重复注册。name: ${name}`);
      return;
    }
    EventManager.on(name, callback, this);
  }
  protected removeEvent(name: string) {
    if (this._events.has(name)) {
      EventManager.off(name, () => this._events.get(name), this);
      this._events.delete(name);
    }
  }
  protected emitEvent(name: string, ...args: any[]) {
    EventManager.emit(name, ...args);
  }

  //#endregion
}
