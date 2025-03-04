import { FunctionCtrl } from "../../../../script/ctrl/FunctionCtrl";
import { FguiManager } from "../FguiManager";
import xx from "@xxyy/app";
import { AniTypeEnum } from "../../../../script/enum/AniTypeEnum";
import { AlertPopup } from "../popup/AlertPopup";
import { GameEvent } from "../event/GameEvent";
import UI_GoldAniView from "../Game/UI_GoldAniView";
import { sp } from "cc";
import { AudioManager } from "../../../../script/engine/manager/AudioManager";
import { ResManager } from "../../../../script/engine/manager/ResManager";
import { GameData } from "../../../../script/model/GameData";

export class GoldAniCtrl extends FunctionCtrl {
    public static readonly instance: GoldAniCtrl = new GoldAniCtrl();

    public isMain:boolean = false;
    public bundle:string = "game";
    public pkgName:string = "Game";
    public resName:string = "GoldAniView";
    public layer:number = 2;

    public type:number = 0;
    
    public constructor(){
        super();

    }

    public get goldAniView():UI_GoldAniView{
        return this._view as UI_GoldAniView;
    }

    public async initialize(){
        await FguiManager.instance.createView(this);
        this._view.touchable = false;
    }

    public async show(type){
        let self = this;
        this.type = type;
        await FguiManager.instance.showView(this);
        
    }

    public onPkgLoad(){
        
    }

    private onShowRewardGoldAni():void{
        this.show(1);
    }

    private onShowJpGoldAni():void{
        this.show(2);
    }

    public onViewAdd(){
        super.onViewAdd();

        let self = this;
        
        if(this.goldAniView.m_ani.content != null){
            (this.goldAniView.m_ani.content as sp.Skeleton).setCompleteListener(this.onAniComplete.bind(this));
            (this.goldAniView.m_ani.content as sp.Skeleton).loop = false;
            (this.goldAniView.m_ani.content as sp.Skeleton).animation = "animation";
            (this.goldAniView.m_ani.content as sp.Skeleton).timeScale = GameData.speedType;
        }else{
            this.onAniComplete();
        }

        AudioManager.instance.playSound("sound/coinsfly", ResManager.instance.getBundle("game"));
        
    }

    private onAniComplete():void{
        this.onViewClick();
        
    }

    public onViewClick():void{
        console.log("onViewClick");
        FguiManager.instance.closeView(this);
        
    }

    public closeView(): void {
        super.closeView();

        if(this.type == 1){
            xx.eventManager.emit(GameEvent.SHOW_JP_REWARD);
        }else{
            xx.eventManager.emit(GameEvent.CHECK_STAR_UP);
        }

        // this.resolve.then(async (resolve) => {
        //     resolve();
        // });

    }

    public beforeViewRemove(): void {
        
    }

}