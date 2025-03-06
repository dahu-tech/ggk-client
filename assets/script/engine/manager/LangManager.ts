import { AssetManager, JsonAsset, math, screen } from "cc";
import { ResManager } from "./ResManager";
import xx from "@xxyy/app";
import { EventIdEnum } from "../enum/EventIdEnum";
import { EventManager } from "../../xx/event/EventManager";

export class LangEnum {
  public static EN: string = "en";
  public static ZH_CN: string = "zh-cn";
}

export class LangManager {
  public static readonly instance: LangManager = new LangManager();

  public supportLang: string[] = [LangEnum.EN, LangEnum.ZH_CN];
  public defaultLang: string = LangEnum.EN;

  public lang: string;
  public bundleLang: AssetManager.Bundle;

  public langContentObj = {};
  public content: object;

  public async initialize(lang: string) {
    let isSupport: boolean = this.checkSupport(lang);

    if (isSupport) {
      this.lang = lang;
    } else {
      this.lang = LangEnum.EN;
    }

    this.bundleLang = await ResManager.instance.loadBundle("languages");
    let langAsset: JsonAsset = (await ResManager.instance.loadAsset(this.bundleLang, this.lang, JsonAsset)) as JsonAsset;
    this.langContentObj[this.lang] = langAsset.json;
    this.content = this.langContentObj[this.lang];

    EventManager.emit(EventIdEnum.LOAD_LANG_COMPLETE, this.content);
  }

  private checkSupport(lang): boolean {
    return this.supportLang.indexOf(lang) >= 0;
  }

  public async changeLang(lang: string) {
    if (!this.langContentObj.hasOwnProperty(lang)) {
      let isSupport: boolean = this.checkSupport(lang);
      if (isSupport) {
        this.lang = lang;
      } else {
        console.log("not support lang : " + lang);
        return;
      }

      let langAsset: JsonAsset = (await ResManager.instance.loadAsset(this.bundleLang, this.lang, JsonAsset)) as JsonAsset;
      this.langContentObj[this.lang] = langAsset.json;
    } else {
      this.lang = lang;
    }

    this.content = this.langContentObj[this.lang];

    EventManager.emit(EventIdEnum.LOAD_LANG_COMPLETE, this.content);
  }
}
