import { EaseType, GComponent, GObject, GTween } from "fairygui-cc";
import { FguiManager } from "../../res/game/script/FguiManager";
import { BaseAni } from "./BaseAni";

export class HMoveAni extends BaseAni{
    public animationTime:number = 0.2;

    public playBeginAni(comp:GObject, callback:Function, thisArg:any){
        comp.center();
        comp.setPivot(0.5, 0.5);
        comp.makeFullScreen();
        // this.setScale(0.1, 0.1);
        let targetX:number = comp.x;
        comp.x = targetX - comp.width;
        GTween.to2(comp.x, comp.y, targetX, comp.y, this.animationTime).setTarget(comp, comp.setPosition).setEase(EaseType.QuadOut).onComplete(function():void{
            callback.call(thisArg);
        }, this);

    }
    
    public playFinishAni(comp:GObject, callback:Function, thisArg:any){
        let targetX:number = comp.x + comp.width;
        // GTween.to2(comp.x, comp.y, targetX, comp.y, this.animationTime).setTarget(comp, comp.setPosition).onComplete(function():void{
        //     callback.call(thisArg);
        // }, this);
        GTween.to(comp.alpha, 0, this.animationTime).setTarget(comp, "alpha").setEase(EaseType.QuartOut).onComplete(function():void{
            comp.alpha = 1;
            callback.call(thisArg);
        }, this);
    }
    
}