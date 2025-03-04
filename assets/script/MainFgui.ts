import { _decorator, Component, Node, screen, AssetManager, director, Scene } from 'cc';
const { ccclass, property } = _decorator;
// import { AudioManager } from './engine/manager/AudioManager';
// import { ResManager } from './engine/manager/ResManager';
// import { Meta } from './meta/Meta';
// import { GameData } from './model/GameData';
// import { api } from './net/game';

// import xx from "@xxyy/app";
import { ResManager } from './engine/manager/ResManager';

@ccclass
export default class MainFgui extends Component {
    onLoad() {
        
    }

    async start() {
        console.log("main fgui start");
        let bundleGame:AssetManager.Bundle = await ResManager.instance.loadBundle("game");
        await bundleGame.getSceneInfo("Game");
        bundleGame.loadScene("Game", null, function():void{
            director.loadScene("Game");
            console.log("main fgui test end");
            
        });
        
    }

}
