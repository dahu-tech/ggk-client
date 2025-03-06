import { FguiManager } from "../FguiManager";
import { GameEvent } from "../event/GameEvent";
import { UiCompEnum, UiPackageEnum } from "../enum/UiEnum";
import AnimationPopup from "./AnimationPopup";
import UI_RewardView from "../Game/UI_RewardView";
import { GameData } from "../../../../script/model/GameData";
import { Timer } from "../../../../script/timer/Timer";
import { EventManager } from "db://assets/script/xx/event/EventManager";

export class RewardPopup extends AnimationPopup {
  public static readonly instance: RewardPopup = new RewardPopup();

  public constructor() {
    super(UiPackageEnum.GAME, UiCompEnum.RewardView);
  }

  public get view(): UI_RewardView {
    return this.contentPane as UI_RewardView;
  }

  public show(): void {
    super.show();

    this.onViewAdd();
  }

  public onViewAdd() {
    let self = this;

    this.view.m_tf_win.text = "w " + GameData.slotDto.resultInfo.freeSpinTotalReward;
    Timer.instance.once(2000, this, this.onViewClick);
  }

  public onViewClick(): void {
    console.log("onViewClick");
    FguiManager.instance.closePopup(this);
  }

  public update(args): void {}

  public hideImmediately(): void {
    super.hideImmediately();
    EventManager.emit(GameEvent.BONUS_END);
  }
}
