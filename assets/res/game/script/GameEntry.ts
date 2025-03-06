import { _decorator, Component, Node, screen, AssetManager, Asset, JsonAsset } from "cc";
// import { initApp } from '../../../script/base';
import { Meta } from "../../../script/meta/Meta";
import { GameData } from "../../../script/model/GameData";
import { api } from "../../../script/net/game";
import { GoldGgkBLLLoadSvcLoadDto, GoldGgkBLLLoadSvcLoadIpo } from "../../../script/net/game/data-contracts";
import { HttpResponse } from "../../../script/net/game/http-client";
import { LoadingCtrl } from "./ctrl/LoadingCtrl";
import { FguiManager } from "./FguiManager";
import { AudioManager } from "../../../script/engine/manager/AudioManager";
import { AppEvents } from "../../../script/base/AppEvents";
import { ENV, GameConfig } from "./config/GameConfig";
import { TextUtil } from "../../../script/utils/TextUtil";
import { GameStatusEnum } from "./enum/GameStatusEnum";
import { GameUtil } from "./utils/GameUtil";
import { ResManager } from "../../../script/engine/manager/ResManager";
import { GameEvent } from "./event/GameEvent";
import { GgkCtrl } from "./ctrl/GgkCtrl";
import { Timer } from "../../../script/timer/Timer";
import { Lang } from "../../../script/lang/Lang";
import { AlertPopup } from "./popup/AlertPopup";
import { App } from "../../../script/xx/App";
import { EventManager } from "../../../script/xx/event/EventManager";
import { Config } from "../../../script/xx/Config";
// import { initApp } from '../../../script/base';
const { ccclass, property } = _decorator;

@ccclass
export default class GameEntry extends Component {
  private jtwToken = "123456";
  private hasError = false;
  onLoad() {}

  async start() {
    console.log("soccer entry start");
    let env: string = TextUtil.getQueryString("env");
    if (env == null) {
      env = ENV.STAGE;
    }

    GameConfig.env = env;

    console.log("env : " + GameConfig.env);

    let self = this;
    new Timer(this);
    AudioManager.init(this.node);

    await FguiManager.instance.initialize();
    LoadingCtrl.instance.initialize();
    let app = new App();
    //1. init app
    // let hasError: boolean = false;
    if (!GameConfig.isDev) {
      try {
        await app.init(new AppEvents());
        // await app.start();
      } catch (err) {
        console.log(err);
        this.hasError = true;
      }
    }

    console.log("userId : " + Config.instance.userId);
    LoadingCtrl.instance.setProgress(20);

    //2. load lang
    let langId = "";
    if (!GameConfig.isDev) {
      langId = Config.instance.langId;
      console.log("langId : " + Config.instance.langId);
    } else {
      langId = TextUtil.getQueryString("lang");
    }

    if (!langId) {
      langId = "en";
    }

    let bundleLang: AssetManager.Bundle = await ResManager.instance.loadBundle("languages");
    let langJson: any = await ResManager.instance.loadAsset(bundleLang, langId, JsonAsset);
    Lang.initialize(langJson.json);
    console.log(langJson.json);
    LoadingCtrl.instance.setProgress(40);

    //3. init network
    if (!GameConfig.isDev) {
      console.log("test url request");
      this.jtwToken = Config.instance.appToken;
      console.log("this.jwtToken : " + this.jtwToken);
      api.init(Config.instance.appUrl, { secure: true }, () => Config.instance.appToken, null, null);
    }

    LoadingCtrl.instance.setProgress(60);

    if (!GameConfig.isDev) {
      let loadIpo: GoldGgkBLLLoadSvcLoadIpo = { userId: Config.instance.userId, currencyId: Config.instance.currencyId };
      let loadDto: HttpResponse<GoldGgkBLLLoadSvcLoadDto> = await api.goldGgk.load(loadIpo);
      console.log("loadDto.result : " + JSON.stringify(loadDto.result));
      if (loadDto.result === null) {
        this.errorAlter();

        return;
      }
      Meta.genMeta(loadDto.result.meta);
      GameData.playerInfo = loadDto.result.playerInfo;
      GameData.genGameInfo(loadDto.result.gameInfo);
    } else {
      let loadDto: GoldGgkBLLLoadSvcLoadDto = {
        playerInfo: {
          balance: 1000,
        },
        gameInfo: [
          {
            chipsId: 1,
            freeSpinCount: 0,
            betCounter: 0,
          },
          {
            chipsId: 2,
            freeSpinCount: 0,
            betCounter: 0,
          },
          {
            chipsId: 3,
            freeSpinCount: 0,
            betCounter: 0,
          },
        ],
        meta: {
          chipsList: [
            {
              chipsId: 1,
              bet: 10,
              betResultList: [10, 20, 50, 100],
              jpBonusList: [200, 500, 2000, 5000],
              jpReward: 10000,
              maxReward: 30000,
            },
            {
              chipsId: 2,
              bet: 100,
              betResultList: [100, 200, 500, 1000],
              jpBonusList: [2000, 5000, 20000, 50000],
              jpReward: 1000000,
              maxReward: 3000000,
            },
            {
              chipsId: 3,
              bet: 1000,
              betResultList: [1000, 2000, 5000, 10000],
              jpBonusList: [20000, 50000, 200000, 500000],
              jpReward: 1000000,
              maxReward: 3000000,
            },
          ],
        },
      };
      Meta.genMeta(loadDto.meta);
      GameData.playerInfo = loadDto.playerInfo;
      GameData.genGameInfo(loadDto.gameInfo);
    }

    LoadingCtrl.instance.setProgress(80);

    EventManager.on(
      GameEvent.ENTER_GAME,
      function (): void {
        LoadingCtrl.instance.setProgress(100);
        Timer.instance.once(
          1000,
          this,
          function (): void {
            // let sound:any = await ResManager.instance.loadAsset(ResManager.instance.getBundle("game"), "sound/bgm", Asset);
            AudioManager.instance.musicVolume = 0.3;
            AudioManager.instance.soundVolume = 1;
            AudioManager.instance.playMusic("sound/bgm", ResManager.instance.getBundle("game"));

            GgkCtrl.instance.show();

            console.log("game entry end");
          },
          this
        );
      },
      this
    );
    GgkCtrl.instance.initialize();
  }
  errorAlter() {
    AlertPopup.instance.open(Lang.translate("errorcode5"), AlertPopup.ALERT, this, function () {
      let data: any = { action: "back" };
      console.log("post message : " + JSON.stringify(data));
      window.top.postMessage(data, "*");
      this.hasError = false;
      setTimeout(() => {
        this.start();
      }, 5000);
    });
  }
  private getGwtToken(): string {
    return this.jtwToken;
  }
}
