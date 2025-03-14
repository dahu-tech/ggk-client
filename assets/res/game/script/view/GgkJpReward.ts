import { GameData } from "../../../../script/model/GameData";
import { GameEvent } from "../event/GameEvent";
import { GButton, GTextField } from "fairygui-cc";
import { Meta } from "../../../../script/meta/Meta";
import { TextUtil } from "../../../../script/utils/TextUtil";
import { JpRewardPopup } from "../popup/JpRewardPopup";
import UI_GgkView from "../Game/UI_GgkView";
import { GoldGgkBLLLoadSvcChips } from "../../../../script/net/game/data-contracts";
import { Lang } from "../../../../script/lang/Lang";
import { sp } from "cc";
import { EventManager } from "db://assets/script/xx/event/EventManager";

export class GgkJpReward {
  public static readonly ins = new GgkJpReward();

  protected view: UI_GgkView;

  public jpBonusTfList: GTextField[] = [];

  public init(gameView: UI_GgkView): void {
    this.view = gameView;

    EventManager.on(GameEvent.CHANGE_BET, this.onChangeBet, this);
    EventManager.on(GameEvent.SHOW_JP_REWARD, this.onShowJpReward, this);

    this.jpBonusTfList = [];

    for (let i: number = 0; i < 4; i++) {
      this.jpBonusTfList.push(this.view["m_tf_bonus" + (i + 1)]);
    }

    this.doLogic();
  }

  public doLogic(): void {
    //设置jp信息
    this.showJpBonus();

    // (this.view.m_ani_jp.content as sp.Skeleton).setCompleteListener(null);
    // (this.view.m_ani_jp.content as sp.Skeleton).loop = true;
    // (this.view.m_ani_jp.content as sp.Skeleton).animation = "hongquan";
  }

  private showJpBonus(): void {
    let chips: GoldGgkBLLLoadSvcChips = Meta.curChipMeta;

    //设置jp信息
    let curJpRewardList: number[] = chips.jackpotList;

    console.log("curJpRewardList : " + curJpRewardList);

    for (let i: number = 0; i < this.jpBonusTfList.length; i++) {
      this.jpBonusTfList[i].text = curJpRewardList[i] + "";
    }

    this.view.m_tf_jp.text = chips.jpReward + "";
    this.view.m_tf_num.text = Lang.translate("win_up_to", [chips.maxReward]);
  }

  private onChangeBet(): void {
    this.showJpBonus();
  }

  private onShowJpReward(): void {
    if (GameData.betDto.resultInfo.jpRewardInfo.isTriggerJpReward) {
      JpRewardPopup.instance.open(Meta.curChipMeta.jpReward);
    } else {
      EventManager.emit(GameEvent.CHECK_STAR_UP);
    }
  }
}
