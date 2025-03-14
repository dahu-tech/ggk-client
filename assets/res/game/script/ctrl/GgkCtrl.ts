import { GButton, GTextField, UIConfig, UIObjectFactory } from "fairygui-cc";
import { ViewCtrl } from "../../../../script/ctrl/ViewCtrl";
import { GoldGgkBLLBetSvcBetDto } from "../../../../script/net/game/data-contracts";
import { FguiManager } from "../FguiManager";
import GameBinder from "../Game/GameBinder";
import { GameEvent } from "../event/GameEvent";
import UI_Com_bet_item from "../Game/UI_Com_bet_item";
import { UiCompEnum, UiPackageEnum } from "../enum/UiEnum";
import { GameData } from "../../../../script/model/GameData";
import { Timer } from "../../../../script/timer/Timer";
import { JpRewardPopup } from "../popup/JpRewardPopup";
import { AlertPopup } from "../popup/AlertPopup";
import * as fgui from "fairygui-cc";
import { RulePopup } from "../popup/RulePopup";
import { GameStatusEnum } from "../enum/GameStatusEnum";
import UI_GgkView from "../Game/UI_GgkView";
import { GgkHud } from "../view/GgkHud";
import { GoldAniCtrl } from "./GoldAniCtrl";
import { GgkJpReward } from "../view/GgkJpReward";
import { GgkWinNumber } from "../view/GgkWinNumber";
import { GgkStar } from "../view/GgkStar";
import { GgkLottory } from "../view/GgkLottory";
import { GgkReward } from "../view/GgkReward";
import { GgkBet } from "../view/GgkBet";
import { GgkGoldAni } from "../view/GgkGoldAni";
import { EventManager } from "db://assets/script/xx/event/EventManager";

export class GgkCtrl extends ViewCtrl {
  public static readonly instance: GgkCtrl = new GgkCtrl();

  public isMain: boolean = true;
  public bundle: string = "game";
  public pkgName: string = UiPackageEnum.GAME;
  public resName: string = UiCompEnum.GgkView;
  public layer: number = 1;

  public gameInfo: GoldGgkBLLBetSvcBetDto;

  public canBet: boolean;

  public selectedBetIndex: number = -1;

  public betBtnList: GButton[] = [];

  public curjackpotList: number[] = [];

  public jpBonusTfList: GTextField[] = [];

  public minBet: number;
  public jpAniStatus: number = 0;

  public speedType: number = 1;
  // public bet:number = 10;
  public isAuto: boolean = false;
  public auto: number = 0;

  // public betList:number[] = [10, 20, 50, 100, 200, 500, 1000];
  public autoList: number[] = [10, 20, 30, 50, 100];

  public selectAutoBtn: UI_Com_bet_item;

  public isSoundOn: boolean = true;

  public gameStatus: number = 0;

  public constructor() {
    super();

    this.aniType = 0;
  }

  public get view(): UI_GgkView {
    return this._view as UI_GgkView;
  }

  public async initialize() {
    console.log("ggk ctrl initialze");
    await FguiManager.instance.createView(this);
    // await FguiManager.instance.showView(this);
  }

  public async show(): Promise<void> {
    let self = this;
    await FguiManager.instance.showView(this);
  }

  public onPkgLoad() {
    GameBinder.bindAll();

    EventManager.emit(GameEvent.ENTER_GAME);
  }

  public onViewAdd() {
    super.onViewAdd();

    let self = this;
    GgkHud.ins.init(this.view);
    GgkJpReward.ins.init(this.view);
    GgkWinNumber.ins.init(this.view);
    GgkStar.ins.init(this.view);
    GgkLottory.ins.init(this.view);
    GgkReward.ins.init(this.view);
    GgkBet.ins.init(this.view);
    GgkGoldAni.ins.init(this.view);

    GoldAniCtrl.instance.initialize();
    JpRewardPopup.instance.initialize();
    RulePopup.instance.initialize();

    this.view.onClick(this.onViewClick, this);

    Timer.instance.loop(1000, this, this.checkAniLoad);
    this.checkAniLoad();
  }

  private checkAniLoad(): void {
    if (this.view.m_ani_win_num.content && this.view.m_ani_lottory.content) {
      Timer.instance.clear(this, this.checkAniLoad);

      GameData.gameStatus = GameStatusEnum.PLAY;
    }
  }

  // private onSlotComplete():void{
  //     this.gameStatus = GameStatusEnum.PLAY;

  //     // SlotWheel.ins.initUnit();

  //     if(this.view.m_com_spin.m_c1.selectedIndex == 1){
  //         this.view.m_com_spin.m_c1.selectedIndex = 0;
  //     }

  //     if(GameData.curGameInfo.spinNum > 0){
  //         this.onBtnSpinClick();
  //         this.isAuto = false;
  //         this.auto = 0;

  //     }
  //     if(this.isAuto){
  //         Timer.instance.once(1000, this, this.onBtnSpinClick);
  //         // xx.timerManager.setTimeout(1000, this.onBtnSpinClick, this);
  //     }

  // }

  private async onViewClick(): Promise<void> {
    this.view.m_com_menu.visible = false;
    this.view.m_c1.selectedIndex = 0;
  }

  public closeView(): void {}

  public beforeViewRemove(): void {}
}
