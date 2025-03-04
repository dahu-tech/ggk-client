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
import { Timer } from "../../../../script/timer/Timer";

export class GgkReward{
    public static readonly ins = new GgkReward();
    
    protected view:UI_GgkView;

    public init(gameView:UI_GgkView):void
    {
        this.view = gameView;
        
        xx.eventManager.on(GameEvent.SHOW_REWARD, this.onShowReward, this);
        // xx.eventManager.on(GameEvent.NEXT_GAME, this.doLogic, this);
        this.view.m_tf_win.text = "";

        this.doLogic();
        
    }

    public doLogic():void {
        this.view.m_tf_win.text = "";
        
    }

    private onShowReward():void{
        if(GameData.betDto.resultInfo.totalReward > 0){
            this.view.m_tf_win.text = "w" + GameData.betDto.resultInfo.totalReward;
            // Timer.instance.once(3000, this, function():void{
                xx.eventManager.emit(GameEvent.SHOW_REWARD_GOLD_ANI);
            // });
            
            GameData.playerInfo.balance += GameData.betDto.resultInfo.totalReward;
            xx.eventManager.emit(GameEvent.REFRESH_PLAYER);
            
        }else{
            this.view.m_tf_win.text = "y";
            // Timer.instance.once(3000, this, function():void{
                xx.eventManager.emit(GameEvent.CHECK_STAR_UP);
            // });
            
        }
        
    }

}
