import { GameData } from "../../../../script/model/GameData";
import { GameEvent } from "../event/GameEvent";
import xx from "@xxyy/app";
import { GButton, GTextField } from "fairygui-cc";
import { Meta } from "../../../../script/meta/Meta";
import { TextUtil } from "../../../../script/utils/TextUtil";
import { JpRewardPopup } from "../popup/JpRewardPopup";
import UI_GgkView from "../Game/UI_GgkView";
import { Chips } from "../../../../script/net/game/data-contracts";
import UI_Com_win_num_item from "../Game/UI_Com_win_num_item";
import { sp } from "cc";
import { GameStatusEnum } from "../enum/GameStatusEnum";
import { AudioManager } from "../../../../script/engine/manager/AudioManager";
import { ResManager } from "../../../../script/engine/manager/ResManager";

export class GgkWinNumber{
    public static readonly ins = new GgkWinNumber();

    public comWinNumList:UI_Com_win_num_item[] = [];
    
    protected view:UI_GgkView;

    public init(gameView:UI_GgkView):void
    {
        this.view = gameView;
        
        xx.eventManager.on(GameEvent.OPEN_WIN_NUMBER, this.onOpenWinNumber, this);
        xx.eventManager.on(GameEvent.RESET_GAME, this.onResetGame, this);
        // xx.eventManager.on(GameEvent.CARD_SHUFFLE_COMPLETE, this.onCardShuffleComplete, this);

        this.comWinNumList = [this.view.m_com_win_num1, this.view.m_com_win_num2, this.view.m_com_win_num3, this.view.m_com_win_num4, this.view.m_com_win_num5];
        
        this.doLogic();
        
    }

    public doLogic():void {
        this.view.m_ani_win_num.visible = false;
        for(let i:number = 0; i < this.comWinNumList.length; i ++){
            this.comWinNumList[i].m_img_right.visible = false;
            this.comWinNumList[i].m_c1.selectedIndex = 0;
        }
        
    }

    private onOpenWinNumber():void{
        this.view.m_ani_win_num.visible = true;
        (this.view.m_ani_win_num.content as sp.Skeleton).setCompleteListener(this.onWinNumOpen.bind(this));
        (this.view.m_ani_win_num.content as sp.Skeleton).loop = false;
        (this.view.m_ani_win_num.content as sp.Skeleton).animation = "show_1";
        (this.view.m_ani_win_num.content as sp.Skeleton).timeScale = GameData.speedType;

        for(let i:number = 0; i < this.comWinNumList.length; i ++){
            this.comWinNumList[i].m_c1.selectedIndex = 1;
            this.comWinNumList[i].m_tf_num.text = GameData.betDto.resultInfo.rewardNumList[i] + "";
        }
        
        AudioManager.instance.playSound("sound/gua", ResManager.instance.getBundle("game"));
        
    }

    private onWinNumOpen():void{
        xx.eventManager.emit(GameEvent.OPEN_LOTTORY)
    }

    private onResetGame():void{
        this.view.m_ani_win_num.visible = true;
        (this.view.m_ani_win_num.content as sp.Skeleton).setCompleteListener(this.onWinNumReset.bind(this));
        (this.view.m_ani_win_num.content as sp.Skeleton).loop = false;
        (this.view.m_ani_win_num.content as sp.Skeleton).animation = "quan_in";
        (this.view.m_ani_win_num.content as sp.Skeleton).timeScale = GameData.speedType;

    }

    private onWinNumReset():void{
        this.doLogic();

        if(GameData.gameStatus == GameStatusEnum.BET){
            xx.eventManager.emit(GameEvent.OPEN_WIN_NUMBER);
        }
        
    }

}
