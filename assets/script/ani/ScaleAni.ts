import { EaseType, GComponent, GObject, GTween } from "fairygui-cc";
import { FguiManager } from "../../res/game/script/FguiManager";
import { BaseAni } from "./BaseAni";

export class ScaleAni extends BaseAni{
    public playBeginAni(comp:GObject, callback:Function, thisArg:any){
        comp.center();
        comp.setPivot(0.5, 0.5);
        comp.makeFullScreen();
        comp.setScale(0, 0);
        
        GTween.to2(0, 0, 1, 1, this.animationTime).setTarget(comp, comp.setScale).setEase(EaseType.BackOut).onComplete(function():void{
            callback.call(thisArg);
        }, this);

    }
    
    public playFinishAni(comp:GObject, callback:Function, thisArg:any){
        GTween.to2(1, 1, 0, 0, this.animationTime).setTarget(comp, comp.setScale).setEase(EaseType.QuadOut).onComplete(function():void{
            callback.call(thisArg);
        }, this);

    }
    
}