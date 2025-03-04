import { Asset, AssetManager, Button, Component, Node } from "cc";
import { GComponent, GObject, GTween } from "fairygui-cc";
import { BaseCtrl } from "./BaseCtrl";

export abstract class ViewCtrl extends BaseCtrl {
    public aniTime:number = 0.3;
    public constructor(){
        super();

        this.aniType = 1;
        
    }

    public onViewAdd(): void {
        if(this.aniType == 1)
        {
            // this.view.x = FguiManager.instance.width;
            // GTween.to(FguiManager.instance.width, 0, this.aniTime).setTarget(this.view, "x").onComplete(this.onShowAniComplete, this);

        }
    }

    public onShowAniComplete():void{
        console.log("enter function onShowAniComplete");
        
    }

}