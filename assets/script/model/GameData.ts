import { GoldGgkBLLBetSvcBetDto, GoldGgkBLLLoadSvcGameInfo, GoldGgkBLLLoadSvcPlayerInfo } from "../net/game/data-contracts";
import LocalStorage from "../xx/LocalStorage";

export class GameData {
  public static playerInfo: GoldGgkBLLLoadSvcPlayerInfo;
  public static gameInfo: GoldGgkBLLLoadSvcGameInfo[];
  public static curGameIndex: number;
  public static curGameInfo: GoldGgkBLLLoadSvcGameInfo;
  public static betDto: GoldGgkBLLBetSvcBetDto;
  public static isFreeBet: boolean = false;

  public static gameStatus: number = 0;
  public static speedType: number = 1;
  public static needResetGame: boolean = false;

  public static genGameInfo(gameInfo: GoldGgkBLLLoadSvcGameInfo[]): void {
    this.gameInfo = gameInfo;

    let localChipId: number = LocalStorage.instance.get("chipId", 0);
    if (localChipId == 0) {
      this.curGameIndex = 0;
    } else {
      for (let i: number = 0; i < this.gameInfo.length; i++) {
        if (this.gameInfo[i].chipsId == localChipId) {
          this.curGameIndex = i;
          break;
        }
      }
    }

    this.curGameInfo = this.gameInfo[this.curGameIndex];
    this.isFreeBet = this.curGameInfo.freeSpinNum > 0;
  }

  public static changeGame(chipIndex: number): void {
    this.curGameIndex = chipIndex;
    this.curGameInfo = this.gameInfo[chipIndex];
    this.isFreeBet = this.curGameInfo.freeSpinNum > 0;
    this.needResetGame = false;
  }

  public static sync(): void {
    this.playerInfo = this.betDto.playerInfo;
    this.gameInfo[this.curGameIndex] = this.betDto.resultInfo.gameInfo;
    this.curGameInfo = this.betDto.resultInfo.gameInfo;
  }
}
