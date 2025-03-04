import { TextUtil } from "../../../../script/utils/TextUtil";
import { FunctionCtrl } from "../../../../script/ctrl/FunctionCtrl";
import { FguiManager } from "../FguiManager";
import xx from "@xxyy/app";
import { GameEvent } from "../event/GameEvent";
import { UiCompEnum, UiPackageEnum } from "../enum/UiEnum";
import { AniTypeEnum } from "../../../../script/enum/AniTypeEnum";
import AnimationPopup from "./AnimationPopup";
import { Timer } from "../../../../script/timer/Timer";
import { GameData } from "../../../../script/model/GameData";
import { Meta } from "../../../../script/meta/Meta";
import { sp } from "cc";
import { AudioManager } from "../../../../script/engine/manager/AudioManager";
import { ResManager } from "../../../../script/engine/manager/ResManager";
import UI_JpRewardView from "../Game/UI_JpRewardView";
import { GTween, GTweener } from "fairygui-cc";

export class JpRewardPopup extends AnimationPopup {
    public static readonly instance: JpRewardPopup = new JpRewardPopup();

    public win:number;
    public aniIndex:number;
    public sec:number;

    public tweener:GTweener;
    
    public constructor(){
        super(UiPackageEnum.GAME, UiCompEnum.JpRewardView);

    }

    public get view():UI_JpRewardView{
        return this.contentPane as UI_JpRewardView;
    }

    public initialize():void{
        super.initialize();

        this.view.m_btn_skip.onClick(this.onBtnSkipClick, this);
        this.view.m_btn_collect.onClick(this.onBtnCollectClick, this);

    }

    private onBtnSkipClick():void{
        this.tweener.kill();
        this.onTweenComplete();

        if(this.view.m_ani_coin.content != null){
            (this.view.m_ani_coin.content as sp.Skeleton).setCompleteListener(this.onAniCoinIdleComplete.bind(this));
            (this.view.m_ani_coin.content as sp.Skeleton).loop = false;
            (this.view.m_ani_coin.content as sp.Skeleton).animation = "lotto_coin_idle";
            (this.view.m_ani_coin.content as sp.Skeleton).timeScale = GameData.speedType;
        }else{
            Timer.instance.once(3000 / GameData.speedType, this.onAniCoinIdleComplete, this);
        }

    }

    private onBtnCollectClick():void{
        this.onViewClick();
    }

    public async open(win:number = 0){
        this.win = win;
        this.sec = 4;
        super.open();
        
    }

    public onViewAdd(){
        let self = this;

        this.view.m_c1.selectedIndex = 0;
        
        if(this.view.m_ani_jp.content != null){
            (this.view.m_ani_jp.content as sp.Skeleton).setCompleteListener(this.onAniJpOpenComplete.bind(this));
            (this.view.m_ani_jp.content as sp.Skeleton).loop = false;
            (this.view.m_ani_jp.content as sp.Skeleton).animation = "lotto_jackpot_open";
            (this.view.m_ani_jp.content as sp.Skeleton).timeScale = GameData.speedType;
            
        }else{
            this.onAniJpOpenComplete();
        }

        // AudioManager.instance.playSound("sound/jackpot", ResManager.instance.getBundle("game"));
    }

    private onAniJpOpenComplete():void{
        this.view.m_c1.selectedIndex = 1;
        
        if(this.view.m_ani_jp.content != null){
            (this.view.m_ani_jp.content as sp.Skeleton).setCompleteListener(null);
            (this.view.m_ani_jp.content as sp.Skeleton).loop = true;
            (this.view.m_ani_jp.content as sp.Skeleton).animation = "lotto_jackpot_idle";
            (this.view.m_ani_jp.content as sp.Skeleton).timeScale = GameData.speedType;
            
        }

        if(this.view.m_ani_coin.content != null){
            (this.view.m_ani_coin.content as sp.Skeleton).setCompleteListener(this.onAniCoinOpenComplete.bind(this));
            (this.view.m_ani_coin.content as sp.Skeleton).loop = false;
            (this.view.m_ani_coin.content as sp.Skeleton).animation = "lotto_coin_open";
            (this.view.m_ani_coin.content as sp.Skeleton).timeScale = GameData.speedType;
            
        }else{
            Timer.instance.once(3000, this.onAniCoinOpenComplete, this);
        }

        this.view.m_tf_win.text = "0.00";
        this.tweener = GTween.to(0, this.win, 2.67 / GameData.speedType).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this);
        
        AudioManager.instance.playSound("sound/jp", ResManager.instance.getBundle("game"));
        
    }

    private onAniCoinOpenComplete():void{
        if(this.view.m_ani_coin.content != null){
            (this.view.m_ani_coin.content as sp.Skeleton).setCompleteListener(this.onAniCoinIdleComplete.bind(this));
            (this.view.m_ani_coin.content as sp.Skeleton).loop = false;
            (this.view.m_ani_coin.content as sp.Skeleton).animation = "lotto_coin_idle";
            (this.view.m_ani_coin.content as sp.Skeleton).timeScale = GameData.speedType;
        }else{
            Timer.instance.once(3000 / GameData.speedType, this.onAniCoinIdleComplete, this);
        }

    }

    private onAniCoinIdleComplete():void{
        this.onViewClick();
        // this.view.m_btn_collect
        // if(this.view.m_ani_jp.content != null){
        //     (this.view.m_ani_jp.content as sp.Skeleton).setCompleteListener(this.onAniJpComplete.bind(this));
        //     (this.view.m_ani_jp.content as sp.Skeleton).loop = false;
        //     (this.view.m_ani_jp.content as sp.Skeleton).animation = "lotto_jackpot_close";
            
        // }else{
        //     this.onAniJpComplete();
        // }

    }

    private onTweenUpdate(value1:GTweener):void{
        this.view.m_tf_win.text = "" + TextUtil.fixNumber(value1.value.x);
        // console.log("update : " + this.view.m_tf_win.text);
    }

    private onTweenComplete():void{
        this.view.m_tf_win.text = TextUtil.fixNumber(this.win);
        console.log("complete : " + this.view.m_tf_win.text);
        Timer.instance.clearAll(this);
        
        this.view.m_c1.selectedIndex = 2;
        
    }

    public onViewClick():void{
        console.log("onViewClick");
        FguiManager.instance.closePopup(this);
        
    }

    public update(args):void
    {
        
    }

    public hideImmediately():void
    {
        super.hideImmediately();
        xx.eventManager.emit(GameEvent.SHOW_JP_GOLD_ANI);
        
        GameData.playerInfo.balance += this.win;
        xx.eventManager.emit(GameEvent.REFRESH_PLAYER);
        
    }

}