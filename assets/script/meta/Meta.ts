import { GameData } from "../model/GameData";
import { GoldGgkBLLLoadSvcChips, GoldGgkBLLLoadSvcGgkMeta } from "../net/game/data-contracts";

// export interface PosMultiMeta{
//     position:number;
//     multiples:number;
// }

export class Meta {
  public static chipMetaList: GoldGgkBLLLoadSvcChips[];

  public static genMeta(meta: GoldGgkBLLLoadSvcGgkMeta): void {
    console.log("start genMeta");
    this.chipMetaList = meta.chipsList;
  }

  public static get bet(): number {
    return this.chipMetaList[GameData.curGameIndex].bet;
  }

  public static get chipId(): number {
    return this.chipMetaList[GameData.curGameIndex].chipsId;
  }

  public static get curChipMeta(): GoldGgkBLLLoadSvcChips {
    return this.chipMetaList[GameData.curGameIndex];
  }
}
