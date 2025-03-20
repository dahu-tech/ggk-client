import { GameData } from "../../../../script/model/GameData";
import { GameEvent } from "../event/GameEvent";
import { Meta } from "../../../../script/meta/Meta";
import { TextUtil } from "../../../../script/utils/TextUtil";
import { JpRewardPopup } from "../popup/JpRewardPopup";
import UI_GgkView from "../Game/UI_GgkView";
import { GoldGgkBLLBetSvcBetDto, GoldGgkBLLBetSvcBetIpo, GoldGgkBLLLoadSvcChips } from "../../../../script/net/game/data-contracts";
import UI_Com_win_num_item from "../Game/UI_Com_win_num_item";
import UI_Com_bet_item from "../Game/UI_Com_bet_item";
import * as fgui from "fairygui-cc";
import { GameStatusEnum } from "../enum/GameStatusEnum";
import { AlertPopup } from "../popup/AlertPopup";
import { Lang } from "../../../../script/lang/Lang";
import { GameConfig } from "../config/GameConfig";
import { HttpResponse } from "../../../../script/net/game/http-client";
import { api } from "../../../../script/net/game";
import { Event, sp } from "cc";
import { EventManager } from "db://assets/script/xx/event/EventManager";
import { Config } from "db://assets/script/xx/Config";
import LocalStorage from "db://assets/script/xx/LocalStorage";

export class GgkBet {
  public static readonly ins = new GgkBet();

  protected view: UI_GgkView;

  public speedType: number = 1;
  // public bet:number = 10;
  public isAuto: boolean = false;
  public auto: number = 0;

  // public betList:number[] = [10, 20, 50, 100, 200, 500, 1000];
  public autoList: number[] = [10, 20, 30, 50, 100];

  public selectAutoBtn: UI_Com_bet_item;

  public init(gameView: UI_GgkView): void {
    this.view = gameView;

    EventManager.on(GameEvent.SHOW_FREE_BET_ANI, this.onshowFreeBetAni, this);
    EventManager.on(GameEvent.NEXT_GAME, this.onNextGame, this);

    this.view.m_com_reveal.m_btn_spin.onClick(this.onBtnSpinClick, this);
    this.view.m_com_reveal.m_btn_stop.onClick(this.onBtnStopClick, this);
    this.view.m_com_reveal.m_btn_free.onClick(this.onBtnSpinClick, this);
    this.view.m_com_speed.m_btn_speed_fast.onClick(this.onBtnSpeedFastClick, this);
    this.view.m_com_speed.m_btn_speed_normal.onClick(this.onBtnSpeedNormalClick, this);
    this.view.m_btn_bet.onClick(this.onBtnBetClick, this);
    this.view.m_com_auto.m_btn_auto.onClick(this.onBtnAutoClick, this);
    this.view.m_com_auto.m_btn_stop_auto.onClick(this.onBtnStopAutoClick, this);
    // this.view.m_com_bet_list.m_btn_ok.onClick(this.onBetListBtnOkClick, this);
    // this.view.m_com_auto_list.m_btn_ok.onClick(this.onAutoListBtnOkClick, this);
    this.view.m_com_bet_list.m_list_bet.itemRenderer = this.onListBetRender.bind(this);
    this.view.m_com_auto_list.m_list_autospin.itemRenderer = this.onListAutoRender.bind(this);
    this.view.m_com_bet_list.m_list_bet.numItems = Meta.chipMetaList.length;
    this.view.m_com_auto_list.m_list_autospin.numItems = this.autoList.length;

    this.doLogic();
  }

  public doLogic(): void {
    this.view.m_com_reveal.m_ani_free.visible = false;
    this.setBetValue();
    this.setAutoStatus();
    this.setFreeSpinStatus();

    if (this.isAuto) {
      this.onBtnSpinClick();
    }
  }

  private setBetValue(): void {
    this.view.m_tf_bet.text = Meta.bet + "";
    LocalStorage.instance.set("chipId", Meta.chipId);
  }

  private setAutoStatus(): void {
    if (this.auto == -1) {
      this.isAuto = true;
    } else {
      this.isAuto = this.auto > 0;
    }

    if (this.auto == -1) {
      this.view.m_com_auto.m_c1.selectedIndex = 1;
      this.view.m_tf_auto.text = "∞";
    } else if (this.auto == 0) {
      this.view.m_com_auto.m_c1.selectedIndex = 0;
      this.view.m_tf_auto.text = "--";
    } else {
      this.view.m_com_auto.m_c1.selectedIndex = 1;
      this.view.m_tf_auto.text = this.auto + "";
    }
  }

  private setFreeSpinStatus(): void {
    if (GameData.curGameInfo.freeSpinNum > 0) {
      this.view.m_com_reveal.m_c1.selectedIndex = 2;
    } else {
      if (this.view.m_com_reveal.m_c1.selectedIndex == 2) {
        this.view.m_com_reveal.m_c1.selectedIndex = 0;
      }
    }
  }

  private async onBtnSpinClick(): Promise<void> {
    if (GameData.gameStatus != GameStatusEnum.PLAY) return;

    let self = this;

    this.view.m_c1.selectedIndex = 0;

    if (this.auto > 0) {
      this.auto--;
    }

    if (GameData.curGameInfo.freeSpinNum > 0) {
      GameData.isFreeBet = true;
      GameData.curGameInfo.freeSpinNum--;
    } else {
      GameData.isFreeBet = false;
    }

    if (!GameData.isFreeBet) {
      if (Number(GameData.playerInfo.balance) < Meta.bet) {
        this.auto = 0;
        this.isAuto = false;
        this.setAutoStatus();
        this.view.m_com_reveal.m_c1.selectedIndex = 0;
        AlertPopup.instance.open(Lang.translate("errorcode3"), AlertPopup.CONFIRM, this, function () {
          EventManager.emit(GameEvent.RECHARGE);
        });
        return;
      }
    }

    this.setAutoStatus();

    if (this.isAuto) {
      this.view.m_com_reveal.m_c1.selectedIndex = 1;
    } else {
      this.view.m_com_reveal.m_c1.selectedIndex = 0;
    }

    // this.setFreeSpinStatus();
    let betDto: GoldGgkBLLBetSvcBetDto;
    let isError: boolean = false;

    fgui.GRoot.inst.showModalWait();
    GameData.gameStatus = GameStatusEnum.BET;

    if (GameConfig.isDev) {
      let random: number = Math.random();
      console.log("random : " + random);
      let roundIdx: number = GameData.curGameInfo.roundIdx + 1;
      let freeSpinNum: number = 0;
      if (roundIdx >= 10) {
        roundIdx = 0;
        freeSpinNum = 1;
      }
      if (random < 0) {
        betDto = {
          playerInfo: {
            balance: Number(GameData.playerInfo.balance) + +Meta.bet,
          },
          resultInfo: {
            cardTable: [
              {
                //彩票上的所有元素
                num: 5,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //-1代表没中奖
              },
              {
                num: 2,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 3,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 4,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 1,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 10,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 7,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 8,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 5, //
              },
              {
                num: 9,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 4, //
              },
              {
                num: 6,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 3, //
              },
              {
                num: 12,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 2, //
              },
              {
                num: 11,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 1, //
              },
            ],
            winNums: [1, 2, 3, 4, 5], //彩票中奖数字
            totalReward: 10000, //所有彩票的奖励总和
            gameInfo: {
              chipsId: 1, //下注额id
              freeSpinNum: freeSpinNum, //免费摇奖次数
              roundIdx: roundIdx, //0-9,抽过多少次，到10清空，转换一次spinNum
            },

            isTriggerJp: true, //是否收集齐彩票，触发jp抽奖
          },
        };
      } else {
        betDto = {
          playerInfo: {
            balance: Number(GameData.playerInfo.balance) + Meta.bet,
          },
          resultInfo: {
            cardTable: [
              {
                //彩票上的所有元素
                num: 5,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //-1代表没中奖
              },
              {
                num: 2,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 3,
                rewardType: 2, //1-基础奖金,2-jp奖金
                rewardIdx: 3, //
              },
              {
                num: 4,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 1,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 10,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 7,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 8,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 9,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 6,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 12,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
              {
                num: 11,
                rewardType: 1, //1-基础奖金,2-jp奖金
                rewardIdx: 0, //
              },
            ],
            winNums: [1, 2, 3, 4, 5], //彩票中奖数字
            totalReward: 100, //所有彩票的奖励总和
            gameInfo: {
              chipsId: 1, //下注额id
              freeSpinNum: freeSpinNum, //免费摇奖次数
              roundIdx: roundIdx, //0-9,抽过多少次，到10清空，转换一次spinNum
            },
            isTriggerJp: true, //是否收集齐彩票，触发jp抽奖
          },
        };
      }
      fgui.GRoot.inst.closeModalWait();
    } else {
      let betIpo: GoldGgkBLLBetSvcBetIpo = { userId: Config.instance.userId, currencyId: Config.instance.currencyId, chipsId: Meta.curChipMeta.chipsId };
      let response: HttpResponse<GoldGgkBLLBetSvcBetDto>;
      let isError: boolean = false;
      try {
        response = await api.goldGgk.bet(betIpo);
      } catch (err) {
        console.log(err);
        this.resetGameStatus("errorcode4");
        isError = true;
      }
      fgui.GRoot.inst.closeModalWait();
      if (!isError && response.success) {
        betDto = response.result;
      } else {
        isError = true;
        if (response) {
          AlertPopup.instance.open("Error!\n" + response.message);
        }
      }
    }

    if (!isError) {
      GameData.betDto = betDto;
      GameData.speedType = this.speedType;
      if (GameData.needResetGame) {
        EventManager.emit(GameEvent.RESET_GAME);
      } else {
        EventManager.emit(GameEvent.OPEN_WIN_NUMBER);
      }
      if (!GameData.isFreeBet) {
        GameData.playerInfo.balance = Number(GameData.playerInfo.balance) - Meta.bet;
        EventManager.emit(GameEvent.REFRESH_PLAYER);
      }

      // EventManager.emit(GameEvent.OPEN_WIN_NUMBER);
    }
  }

  private onBtnStopClick(): void {
    this.auto = 0;
    this.isAuto = false;
    this.setAutoStatus();
    this.view.m_com_reveal.m_c1.selectedIndex = 0;
  }

  private onBtnSpeedFastClick(): void {
    this.speedType = 2;
    this.view.m_com_speed.m_c1.selectedIndex = 1;
  }

  private onBtnSpeedNormalClick(): void {
    this.speedType = 1;
    this.view.m_com_speed.m_c1.selectedIndex = 0;
  }

  private onBtnBetClick(evt: Event): void {
    evt.propagationStopped = true;
    if (GameData.gameStatus != GameStatusEnum.PLAY) return;

    // if(GameData.curGameInfo.spinNum > 0 || (GameData.betDto != null && GameData.betDto.resultInfo.gameInfo.spinNum > 0)) return;

    this.view.m_c1.selectedIndex = 1;
  }

  private onBtnAutoClick(evt: Event): void {
    evt.propagationStopped = true;
    if (GameData.gameStatus != GameStatusEnum.PLAY) return;

    // if(GameData.curGameInfo.spinNum > 0 || (GameData.betDto != null && GameData.betDto.resultInfo.gameInfo.spinNum > 0)) return;
    this.view.m_c1.selectedIndex = 2;
  }

  private onBtnStopAutoClick(): void {
    this.auto = 0;
    this.isAuto = false;
    this.setAutoStatus();

    if (GameData.curGameInfo.freeSpinNum > 0) {
      this.view.m_com_reveal.m_c1.selectedIndex = 2;
    } else {
      this.view.m_com_reveal.m_c1.selectedIndex = 0;
    }
  }

  private onBetListBtnOkClick(): void {
    this.view.m_c1.selectedIndex = 0;
    this.setBetValue();
    this.setFreeSpinStatus();
    // if(GameData.curGameInfo.spinNum > 0){
    //     this.onBtnSpinClick();
    // }

    EventManager.emit(GameEvent.CHANGE_BET);
  }

  private onAutoListBtnOkClick(): void {
    this.view.m_c1.selectedIndex = 0;
    this.isAuto = this.auto > 0 || this.auto == -1;
    // this.setAutoStatus();
    if (this.isAuto) {
      this.onBtnSpinClick();
      // if(this.selectAutoBtn){
      //     this.selectAutoBtn.selected = false;
      //     this.selectAutoBtn = null;
      // }
    }
  }

  private onListBetRender(index: number, item: UI_Com_bet_item): void {
    let self = this;
    item.m_tf_value.text = Meta.chipMetaList[index].bet + "";
    // item.selected = (Meta.bet == Meta.chipMetaList[index].betMoney);
    item.data = index;

    item.onClick(function (): void {
      if (GameData.curGameIndex != item.data) {
        GameData.changeGame(item.data);
        EventManager.emit(GameEvent.RESET_GAME);
        self.onBetListBtnOkClick();
      }

      // if(item.selected){
      //     GameData.changeGame(item.data);

      // }
    }, this);
  }

  private onListAutoRender(index: number, item: UI_Com_bet_item): void {
    let self = this;
    if (this.autoList[index] != -1) {
      item.m_tf_value.text = this.autoList[index] + "";
      item.m_c1.selectedIndex = 0;
    } else {
      item.m_tf_value.text = "∞"; //Lang.translate("until_feature");
      item.m_c1.selectedIndex = 1;
    }

    item.selected = false;
    item.data = this.autoList[index] + "";

    item.onClick(function (): void {
      self.auto = item.data;
      self.onAutoListBtnOkClick();
      // if(item.selected){
      //     self.auto = item.data;
      //     self.selectAutoBtn = item;
      // }else{
      //     self.auto = 0;
      //     self.selectAutoBtn = null;
      // }
    }, this);
  }

  private resetGameStatus(error: string): void {
    AlertPopup.instance.open(Lang.translate(error));
    fgui.GRoot.inst.closeModalWait();
    GameData.gameStatus = GameStatusEnum.PLAY;
  }

  private onshowFreeBetAni(): void {
    this.view.m_com_reveal.m_ani_free.visible = true;
    if (this.view.m_com_reveal.m_ani_free.content) {
      (this.view.m_com_reveal.m_ani_free.content as sp.Skeleton).setCompleteListener(this.onRevealShowComplete.bind(this));
      (this.view.m_com_reveal.m_ani_free.content as sp.Skeleton).loop = false;
      (this.view.m_com_reveal.m_ani_free.content as sp.Skeleton).animation = "3_reveal_show";
      (this.view.m_com_reveal.m_ani_free.content as sp.Skeleton).timeScale = GameData.speedType;
    } else {
      this.onRevealShowComplete();
    }
  }

  private onRevealShowComplete(): void {
    EventManager.emit(GameEvent.NEXT_GAME);
  }

  private onNextGame(): void {
    GameData.needResetGame = true;
    GameData.gameStatus = GameStatusEnum.PLAY;
    this.doLogic();
  }
}
