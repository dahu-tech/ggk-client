import { GameData } from "../../../../script/model/GameData";
import { GameEvent } from "../event/GameEvent";
import { GButton, GTextField } from "fairygui-cc";
import { Meta } from "../../../../script/meta/Meta";
import { TextUtil } from "../../../../script/utils/TextUtil";
import { JpRewardPopup } from "../popup/JpRewardPopup";
import UI_GgkView from "../Game/UI_GgkView";
import UI_Com_lottory_item from "../Game/UI_Com_lottory_item";
import { sp } from "cc";
import { Timer } from "../../../../script/timer/Timer";
import UI_Com_win_num_item from "../Game/UI_Com_win_num_item";
import { GgkWinNumber } from "./GgkWinNumber";
import { GameStatusEnum } from "../enum/GameStatusEnum";
import { AudioManager } from "../../../../script/engine/manager/AudioManager";
import { ResManager } from "../../../../script/engine/manager/ResManager";
import { EventManager } from "db://assets/script/xx/event/EventManager";

export class GgkLottory {
  public static readonly ins = new GgkLottory();

  public comLottoryList: UI_Com_lottory_item[] = [];

  protected view: UI_GgkView;

  private rewardNumIdx: number = 0;

  public init(gameView: UI_GgkView): void {
    this.view = gameView;

    EventManager.on(GameEvent.OPEN_LOTTORY, this.onOpenLottory, this);
    EventManager.on(GameEvent.RESET_GAME, this.onResetGame, this);

    this.comLottoryList = [
      this.view.m_com_lottory1,
      this.view.m_com_lottory2,
      this.view.m_com_lottory3,
      this.view.m_com_lottory4,
      this.view.m_com_lottory5,
      this.view.m_com_lottory6,
      this.view.m_com_lottory7,
      this.view.m_com_lottory8,
      this.view.m_com_lottory9,
      this.view.m_com_lottory10,
      this.view.m_com_lottory11,
      this.view.m_com_lottory12,
    ];

    this.doLogic();
  }

  public doLogic(): void {
    this.view.m_ani_lottory.visible = false;
    for (let i: number = 0; i < this.comLottoryList.length; i++) {
      this.comLottoryList[i].m_img_right.visible = false;
      this.comLottoryList[i].m_c1.selectedIndex = 0;
    }
  }

  private onOpenLottory(): void {
    this.view.m_ani_lottory.visible = true;
    (this.view.m_ani_lottory.content as sp.Skeleton).setCompleteListener(this.onLottoryOpened.bind(this));
    (this.view.m_ani_lottory.content as sp.Skeleton).loop = false;
    (this.view.m_ani_lottory.content as sp.Skeleton).animation = "show_2";
    (this.view.m_ani_lottory.content as sp.Skeleton).timeScale = GameData.speedType;

    for (let i: number = 0; i < this.comLottoryList.length; i++) {
      this.comLottoryList[i].m_c1.selectedIndex = GameData.betDto.resultInfo.resultNumList[i].rewardType;
      this.comLottoryList[i].m_tf_num.text = GameData.betDto.resultInfo.resultNumList[i].num + "";
      if (GameData.betDto.resultInfo.resultNumList[i].rewardIdx >= 0) {
        if (GameData.betDto.resultInfo.resultNumList[i].rewardType == 1) {
          this.comLottoryList[i].m_tf_reward.text = "" + (Meta.curChipMeta.prizeList[GameData.betDto.resultInfo.resultNumList[i].rewardIdx] + "").replace(".", ",");
        } else {
          this.comLottoryList[i].m_com_reward_jp_type.m_c1.selectedIndex = GameData.betDto.resultInfo.resultNumList[i].rewardIdx;
        }
      } else {
        let randomIdx: number = 0;
        if (GameData.betDto.resultInfo.resultNumList[i].rewardType == 1) {
          randomIdx = Math.floor(Math.random() * Meta.curChipMeta.prizeList.length);
          this.comLottoryList[i].m_tf_reward.text = "" + (Meta.curChipMeta.prizeList[randomIdx] + "").replace(".", ",");
        } else {
          randomIdx = Math.floor(Math.random() * Meta.curChipMeta.jackpotList.length);
          this.comLottoryList[i].m_com_reward_jp_type.m_c1.selectedIndex = randomIdx;
        }
      }
    }

    this.rewardNumIdx = 0;

    AudioManager.instance.playSound("sound/gua", ResManager.instance.getBundle("game"));
  }

  private onLottoryOpened(): void {
    let rewardNum: number;
    let lottoryNum: number;
    let rewardNumIdx: number = 0;
    for (let i: number = 0; i < GameData.betDto.resultInfo.rewardNumList.length; i++) {
      rewardNum = GameData.betDto.resultInfo.rewardNumList[i];
      for (let j: number = 0; j < GameData.betDto.resultInfo.resultNumList.length; j++) {
        lottoryNum = GameData.betDto.resultInfo.resultNumList[j].num;
        if (rewardNum == lottoryNum) {
          this.showRewardNum(i, j, rewardNumIdx);
          rewardNumIdx++;
        }
      }
    }

    if (rewardNumIdx == 0) {
      EventManager.emit(GameEvent.SHOW_REWARD);
    } else {
      Timer.instance.once((rewardNumIdx * 300) / GameData.speedType + 500 / GameData.speedType, this, function (): void {
        EventManager.emit(GameEvent.SHOW_REWARD);
      });
    }
  }

  private showRewardNum(winNumIdx: number, lottoryIdx: number, rewardNumIdx: number): void {
    let self = this;
    Timer.instance.once((rewardNumIdx * 300) / GameData.speedType, this, function (): void {
      GgkWinNumber.ins.comWinNumList[winNumIdx].m_img_right.visible = true;
      self.comLottoryList[lottoryIdx].m_img_right.visible = true;
    });
  }

  private onResetGame(): void {
    this.view.m_ani_lottory.visible = true;
    (this.view.m_ani_lottory.content as sp.Skeleton).setCompleteListener(this.onLottoryReset.bind(this));
    (this.view.m_ani_lottory.content as sp.Skeleton).loop = false;
    (this.view.m_ani_lottory.content as sp.Skeleton).animation = "shua_in";
    (this.view.m_ani_lottory.content as sp.Skeleton).timeScale = GameData.speedType;
  }

  private onLottoryReset(): void {
    this.doLogic();
  }
}
