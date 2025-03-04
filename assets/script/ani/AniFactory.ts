import { AniTypeEnum } from "../enum/AniTypeEnum";
import { BaseAni } from "./BaseAni";
import { HMoveAni } from "./HMovieAni";
import { ScaleAni } from "./ScaleAni";

export class AniFactory{
    public static createAni(aniType:number):BaseAni{
        if(aniType == AniTypeEnum.HMOVE){
            return new HMoveAni();
        }else if(aniType == AniTypeEnum.SCALE){
            return new ScaleAni();
        }
    }
}