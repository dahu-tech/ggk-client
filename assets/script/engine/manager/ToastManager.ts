import { Asset, AssetManager, assetManager, Component, Node, Prefab, Scheduler, Texture2D } from "cc";
import { BundleType } from "../common";
import xx from "@xxyy/app";
import { Main } from "../../../script/Main";
import { UiManager } from "./UiManager";
import { Timer } from "../../timer/Timer";

export class ToastManager {
    public static readonly instance: ToastManager = new ToastManager();

    private isShowToast:boolean = false;
    
    public show(content:string)
    {
        UiManager.instance.showToast(content);
        Timer.instance.clearAll(this);
        Timer.instance.once(3000, this, this.hideToast);
        
    }

    private hideToast():void{
        UiManager.instance.hideToast();
    }

}

