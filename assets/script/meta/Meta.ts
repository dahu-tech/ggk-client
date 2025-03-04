import { GameData } from "../model/GameData";
import { Chips, GgkMeta } from "../net/game/data-contracts";

// export interface PosMultiMeta{
//     position:number;
//     multiples:number;
// }

export class Meta{
    public static chipMetaList:Chips[];
    
    public static genMeta(meta:GgkMeta):void{
        console.log("start genMeta");
        this.chipMetaList = meta.chipsList;
    }

    public static get bet():number{
        return this.chipMetaList[GameData.curGameIndex].bet;
    }

    public static get chipId():number{
        return this.chipMetaList[GameData.curGameIndex].chipsId;
    }

    public static get curChipMeta():Chips{
        return this.chipMetaList[GameData.curGameIndex];
    }

}