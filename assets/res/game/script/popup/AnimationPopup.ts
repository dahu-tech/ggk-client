import { EaseType, GTween, UIPackage } from "fairygui-cc";
import { FguiManager } from "../FguiManager";
import BasePopup from "./BasePopup";

export default class AnimationPopup extends BasePopup
{
    public static animationTime:number = 0.3;
    
    public constructor($pkgName:string, $compName:string)
    {
        super($pkgName, $compName);
    }

    public initialize():void{
        if(!this.contentPane){
            let view:any = UIPackage.createObject(this.pkgName, this.compName).asCom;
            this.contentPane = view;
            
        }
    }

    public open():void{
        this.initialize();
        FguiManager.instance.showPopup(this);

    }

    public show():void
    {
        super.show();
        
        this.onViewAdd();

    }

    public onViewAdd():void{
        
    }

    public doShowAnimation():void
    {
        this.beforeDoShowAnimation();

        this.center();
        this.setPivot(0.5, 0.5);
        this.makeFullScreen();
        // this.setScale(0.1, 0.1);
        this.setScale(0, 0);
        GTween.to2(0, 0, 1.0, 1.0, AnimationPopup.animationTime).setTarget(this, this.setScale).setEase(EaseType.BackOut).onComplete(this.onShown, this);

        // fairygui.GTween.to2(0.1, 0.1, 1, 1, AnimationPopup.animationTime).setTarget(this, this.setScale).onComplete(this.onShown, this);

        // fairygui.GTween.to(0.1, 1, AnimationPopup.animationTime).setTarget(this, "alpha").onComplete(this.onShown, this);
        
    }

    private beforeDoShowAnimation():void
    {
        
    }

    public doHideAnimation():void
    {
        // this._hideCallback = $callback;
        // this._hideCaller = $caller;

        this.beforeDoHideAnimation();

        // fairygui.GTween.to2(1, 1, 0.1, 0.1, AnimationPopup.animationTime).setTarget(this, this.setScale).onComplete(this.hideImmediately, this);

        // fairygui.GTween.to(1, 0.1, AnimationPopup.animationTime).setTarget(this, "alpha").onComplete(this.hideImmediately, this);
        GTween.to2(1.0, 1.0, 0, 0, AnimationPopup.animationTime).setTarget(this, this.setScale).setEase(EaseType.BackIn).onComplete(this.hideImmediately, this);

    }
    
    private beforeDoHideAnimation():void
    {
        
    }

}