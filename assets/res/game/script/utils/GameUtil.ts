import { Meta } from "../../../../script/meta/Meta";
import { LoadDto } from "../../../../script/net/game/data-contracts";

export class GameUtil{
    public static calcStatus(gameInfo:LoadDto):number{
        let resultStatus:number = 0;
        if(gameInfo.isWin){
            //判断gooalProgress和preResultAmount判断游戏状态
            // if(gameInfo.goalProgress >= 5 || gameInfo.isCollect){
            if(gameInfo.goalProgress >= 5){
                resultStatus = 1;
            }
            else if((gameInfo.winAmount) >= gameInfo.maxStake){
                resultStatus = 2;
            }
        }
        else{
            //根据balance判断游戏状态
            if(gameInfo.balance < gameInfo.preBaseBet){
                resultStatus = 3;
            }
            else if(gameInfo.balance < Meta.betMetaList[0].bet){
                resultStatus = 4;
            }
        }

        return resultStatus;

    }

    public static checkResultStatus(resultStatus:number):boolean{
        return resultStatus > 0;
    }
}