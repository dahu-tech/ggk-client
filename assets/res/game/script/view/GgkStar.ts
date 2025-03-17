import { GameData } from "../../../../script/model/GameData";
import { GameEvent } from "../event/GameEvent";
import { GButton, GTextField } from "fairygui-cc";
import { Meta } from "../../../../script/meta/Meta";
import { TextUtil } from "../../../../script/utils/TextUtil";
import { JpRewardPopup } from "../popup/JpRewardPopup";
import UI_GgkView from "../Game/UI_GgkView";
import { GoldGgkBLLLoadSvcChips } from "../../../../script/net/game/data-contracts";
import UI_Com_win_num_item from "../Game/UI_Com_win_num_item";
import UI_Com_star_item from "../Game/UI_Com_star_item";
import { sp } from "cc";
import { EventManager } from "db://assets/script/xx/event/EventManager";

export class GgkStar {
  public static readonly ins = new GgkStar();

  protected view: UI_GgkView;

  public comStarList: UI_Com_star_item[];

  public init(gameView: UI_GgkView): void {
    this.view = gameView;

    EventManager.on(GameEvent.CHECK_STAR_UP, this.onCheckStarUp, this);

    this.comStarList = [this.view.m_com_star1, this.view.m_com_star2, this.view.m_com_star3, this.view.m_com_star4, this.view.m_com_star5, this.view.m_com_star6, this.view.m_com_star7, this.view.m_com_star8, this.view.m_com_star9, this.view.m_com_star10];

    // this.doLogic();
  }

  public doLogic(): void {
    for (let i: number = 0; i < this.comStarList.length; i++) {
      this.comStarList[i].visible = i < GameData.curGameInfo.roundIdx;
      if (this.comStarList[i].m_ani.content) {
        (this.comStarList[i].m_ani.content as sp.Skeleton).setCompleteListener(null);
        (this.comStarList[i].m_ani.content as sp.Skeleton).loop = true;

        if (GameData.curGameInfo.roundIdx <= 7) {
          (this.comStarList[i].m_ani.content as sp.Skeleton).animation = "idle1";
        } else {
          (this.comStarList[i].m_ani.content as sp.Skeleton).animation = "idle2";
        }
      }
    }
  }

  private onCheckStarUp(): void {
    GameData.sync();
    EventManager.emit(GameEvent.NEXT_GAME);

    // if(GameData.isFreeBet){
    //    EventManager.emit(GameEvent.NEXT_GAME);
    // }else{
    //     let starIdx:number = 0;
    //     if(GameData.betDto.resultInfo.gameInfo.spinNum > 0){
    //         starIdx = 9;
    //     }else{
    //         starIdx = GameData.betDto.resultInfo.gameInfo.roundIdx - 1;
    //     }
    //     this.comStarList[starIdx].visible = true;
    //     if(this.comStarList[starIdx].m_ani.content){
    //         (this.comStarList[starIdx].m_ani.content as sp.Skeleton).setCompleteListener(this.onStarInComplete.bind(this));
    //         (this.comStarList[starIdx].m_ani.content as sp.Skeleton).loop = false;
    //         (this.comStarList[starIdx].m_ani.content as sp.Skeleton).animation = "in";
    //         (this.comStarList[starIdx].m_ani.content as sp.Skeleton).timeScale = GameData.speedType;

    //     }else{
    //         this.onStarInComplete();
    //     }

    // }
  }

  private onStarInComplete(): void {
    if (GameData.betDto.resultInfo.gameInfo.freeSpinNum > 0) {
      EventManager.emit(GameEvent.SHOW_FREE_BET_ANI);
    } else {
      EventManager.emit(GameEvent.NEXT_GAME);
    }
  }
}
