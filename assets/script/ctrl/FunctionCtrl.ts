import { GComponent, GGroup, GObject, GTween } from "fairygui-cc";
import { AniFactory } from "../ani/AniFactory";
import { AniTypeEnum } from "../enum/AniTypeEnum";
import { BaseCtrl } from "./BaseCtrl";

export abstract class FunctionCtrl extends BaseCtrl {
    public aniTime:number = 0.3;
    public constructor(){
        super();

        // this.aniType = 2;
        
    }

    public onViewAdd(): void {
        if(this.aniType == AniTypeEnum.SCALE)
        {
            // (this.view["m_container"] as GGroup).setScale(0, 0);
            // GTween.to2(0, 0, 1, 1, this.aniTime).setTarget(this.view["m_container"], this.view["m_container"].setScale).onComplete(this.onShowAniComplete, this);
            // this.view.setScale(0, 0);
            // GTween.to2(0, 0, 1, 1, this.aniTime).setTarget(this.view, this.view.setScale).onComplete(this.onShowAniComplete, this);
            this.ani = AniFactory.createAni(this.aniType);
            this.ani.playBeginAni(this._view, this.onShowAniComplete, this);
            
        }else if(this.aniType == AniTypeEnum.HMOVE){
            this.ani = AniFactory.createAni(this.aniType);
            this.ani.playBeginAni(this._view, this.onShowAniComplete, this);

        }
        else{
            this.onShowAniComplete();
        }
    }

    public onShowAniComplete():void{
        console.log("popup ani complete");
        
    }

    public closeView(): void {
        if(this.aniType == AniTypeEnum.SCALE)
        {
            // this.view["m_container"].setScale(1, 1);
            // GTween.to2(1, 1, 0, 0, this.aniTime).setTarget(this.view["m_container"], this.view["m_container"].setScale).onComplete(this.onHideAniComplete, this);
            // this.view.setScale(1, 1);
            // GTween.to2(1, 1, 0, 0, this.aniTime).setTarget(this.view, this.view.setScale).onComplete(this.onHideAniComplete, this);
            this.ani.playFinishAni(this._view, this.onHideAniComplete, this);
        }
        else if(this.aniType == AniTypeEnum.HMOVE){
            this.ani.playFinishAni(this._view, this.onHideAniComplete, this);
            
        }
        else
        {
            this.onHideAniComplete();

        }
    }

    private onHideAniComplete():void
    {
        this._view.parent.removeChild(this._view);
        this.onDestroy();
            
    }

}