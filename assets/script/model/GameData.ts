import { BetDto, GameInfo, LoadDto, PlayerInfo } from "../net/game/data-contracts";
import xx from "@xxyy/app";

export class GameData{
    public static playerInfo:PlayerInfo
    public static gameInfo:GameInfo[];
    public static curGameIndex:number;
    public static curGameInfo:GameInfo;
    public static betDto:BetDto;
    public static isFreeBet:boolean = false;

    public static gameStatus:number = 0;
    public static speedType:number = 1;
    public static needResetGame:boolean = false;

    public static genGameInfo(gameInfo:GameInfo[]):void{
        this.gameInfo = gameInfo;

        let localChipId:number = xx.localStorage.get("chipId", 0);
        if(localChipId == 0){
            this.curGameIndex = 0;
        }else{
            for(let i:number = 0; i < this.gameInfo.length; i ++){
                if(this.gameInfo[i].chipsId == localChipId){
                    this.curGameIndex = i;
                    break;
                }
            }
            
        }
        
        this.curGameInfo = this.gameInfo[this.curGameIndex];
        this.isFreeBet = this.curGameInfo.freeSpinCount > 0;
    }

    public static changeGame(chipIndex:number):void{
        this.curGameIndex = chipIndex;
        this.curGameInfo = this.gameInfo[chipIndex];
        this.isFreeBet = this.curGameInfo.freeSpinCount > 0;
        this.needResetGame = false;
    }

    public static sync():void{
        this.playerInfo = this.betDto.playerInfo;
        this.gameInfo[this.curGameIndex] = this.betDto.resultInfo.gameItemInfo;
        this.curGameInfo = this.betDto.resultInfo.gameItemInfo;

    }

}