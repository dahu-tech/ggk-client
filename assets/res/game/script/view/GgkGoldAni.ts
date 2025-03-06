import { GameData } from "../../../../script/model/GameData";
import { GameEvent } from "../event/GameEvent";
import { GButton, GTextField } from "fairygui-cc";
import { Meta } from "../../../../script/meta/Meta";
import { TextUtil } from "../../../../script/utils/TextUtil";
import { JpRewardPopup } from "../popup/JpRewardPopup";
import UI_GgkView from "../Game/UI_GgkView";
import { GoldGgkBLLLoadSvcChips } from "../../../../script/net/game/data-contracts";
import UI_Com_win_num_item from "../Game/UI_Com_win_num_item";
import { Timer } from "../../../../script/timer/Timer";
import { GoldAniCtrl } from "../ctrl/GoldAniCtrl";
import { EventManager } from "db://assets/script/xx/event/EventManager";

export class GgkGoldAni {
  public static readonly ins = new GgkGoldAni();

  protected view: UI_GgkView;

  public init(gameView: UI_GgkView): void {
    this.view = gameView;

    EventManager.on(GameEvent.SHOW_REWARD_GOLD_ANI, this.onShowRewardGoldAni, this);
    EventManager.on(GameEvent.SHOW_JP_GOLD_ANI, this.onShowJpGoldAni, this);

    this.doLogic();
  }

  public doLogic(): void {}

  private onShowRewardGoldAni(): void {
    GoldAniCtrl.instance.show(1);
  }

  private onShowJpGoldAni(): void {
    GoldAniCtrl.instance.show(2);
  }
}
