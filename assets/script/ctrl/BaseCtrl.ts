import { Asset, AssetManager, Button, Component, Node } from "cc";
import { GComponent, GObject } from "fairygui-cc";
import xx from "@xxyy/app";
import { BaseAni } from "../ani/BaseAni";

export abstract class BaseCtrl {
    public _view: GObject;
    
    // get view(){
    //     return this._view;
    // }

    // set view( view : GObject ){
    //     this._view = view;
    // }

    private _events: Map<string, Function> = new Map();

    public abstract isMain:boolean;
    public abstract bundle:string;
    public abstract pkgName:string;
    public abstract resName:string;
    public abstract layer:number;
    public aniType:number = 0;
    public ani:BaseAni;

    public constructor(){
        
    }

    public abstract onPkgLoad():void;

    public abstract onViewAdd():void;

    public abstract closeView():void;

    public abstract beforeViewRemove():void;

    public onDestroy():void{
        xx.eventManager.remove(this);
        this._events.clear();
    }

    //#region events
    protected addEvent(name: string, callback: any) {
        if (this._events.has(name)) {
            xx.logger.error(`UICtrl.addEvent 重复注册。name: ${name}`);
            return;
        }
        xx.eventManager.on(name, callback, this);
    }
    protected removeEvent(name: string) {
        if (this._events.has(name)) {
        xx.eventManager.off(name, this._events.get(name), this);
        this._events.delete(name);
        }
    }
    protected emitEvent(name: string, ...args: any[]) {
        xx.eventManager.emit(name, ...args);
    }
    
    //#endregion

}