import { GameData } from "../../../../script/model/GameData";
import { GameEvent } from "../event/GameEvent";
import { Event, UIConfig } from "fairygui-cc";
import { Meta } from "../../../../script/meta/Meta";
import { TextUtil } from "../../../../script/utils/TextUtil";
import { AudioManager } from "../../../../script/engine/manager/AudioManager";
import { RulePopup } from "../popup/RulePopup";
import UI_GgkView from "../Game/UI_GgkView";
import { EventManager } from "db://assets/script/xx/event/EventManager";

export class GgkHud {
  public static readonly ins = new GgkHud();

  protected view: UI_GgkView;

  public isSoundOn: boolean = true;

  public init(gameView: UI_GgkView): void {
    console.log(gameView);

    this.view = gameView;
    EventManager.on(GameEvent.RECHARGE, this.onBtnRechargeClick, this);
    EventManager.on(GameEvent.CHANGE_BET, this.showBalance, this);
    EventManager.on(GameEvent.REFRESH_PLAYER, this.showBalance, this);
    EventManager.on(GameEvent.NEXT_GAME, this.doLogic, this);

    this.view.m_btn_menu.onClick(this.onBtnMenuClick, this);
    this.view.m_com_menu.m_btn_rules.onClick(this.onBtnHelpClick, this);
    this.view.m_com_menu.m_btn_sound.onClick(this.onBtnSoundClick, this);
    this.view.m_com_menu.m_btn_support.onClick(this.onBtnServiceClick, this);
    this.view.m_btn_back.onClick(this.onBtnBackClick, this);
    this.view.m_btn_recharge.onClick(this.onBtnRechargeClick, this);
    this.view.m_btn_paytable.onClick(this.onBtnHelpClick, this);

    this.setSound();
    this.doLogic();
  }

  public doLogic(): void {
    this.showBalance();
  }

  private showBalance(): void {
    this.view.m_tf_money.text = TextUtil.fixMoneyNumber(GameData.playerInfo.balance) + "";
  }

  private onBtnRechargeClick(): void {
    let data: any = { action: "openDeposit" };
    console.log("post message : " + JSON.stringify(data));
    window.top.postMessage(data, "*");
  }

  private onBtnBackClick(): void {
    let data: any = { action: "back" };
    console.log("post message : " + JSON.stringify(data));
    window.top.postMessage(data, "*");
  }

  private onBtnServiceClick(): void {
    console.log("enter function onBtnServiceClick");
    if (window.top) {
      let data: any = { action: "openIM" };
      console.log("post message : " + JSON.stringify(data));
      window.top.postMessage(data, "*");
    }
  }

  private onBtnSoundClick(): void {
    this.isSoundOn = !this.isSoundOn;
    this.setSound();
    this.view.m_com_menu.visible = false;
  }

  private setSound(): void {
    if (this.isSoundOn) {
      AudioManager.instance.musicVolume = 1;
      AudioManager.instance.soundVolume = 1;
      UIConfig.buttonSoundVolumeScale = 1;
      this.view.m_com_menu.m_btn_sound.m_c1.selectedIndex = 0;
    } else {
      AudioManager.instance.musicVolume = 0;
      AudioManager.instance.soundVolume = 0;
      UIConfig.buttonSoundVolumeScale = 0;
      this.view.m_com_menu.m_btn_sound.m_c1.selectedIndex = 1;
    }
  }

  private onBtnHelpClick(): void {
    RulePopup.instance.open();
    this.view.m_com_menu.visible = false;
  }

  private onBtnMenuClick($evnt: Event): void {
    $evnt.bubbles = false;
    this.view.m_com_menu.visible = !this.view.m_com_menu.visible;
  }
}
