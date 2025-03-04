import { GObject } from "fairygui-cc";

export abstract class BaseAni{
    public animationTime:number = 0.3;

    public abstract playBeginAni(comp:GObject, callback:Function, thisArg:any);
    public abstract playFinishAni(comp:GObject, callback:Function, thisArg:any);

}