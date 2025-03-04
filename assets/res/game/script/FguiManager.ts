import { AssetManager, color, math, screen } from "cc";
import * as fgui from "fairygui-cc";
import { BaseCtrl } from "../../../script/ctrl/BaseCtrl";
import { ResManager } from "../../../script/engine/manager/ResManager";
import { CreatorGloader } from "../../../script/ui/BundleGloader";
import BaseBinder from "./Base/BaseBinder";
import UI_Root from "./Base/UI_Root";
import UI_ToastView from "./Base/UI_ToastView";
import AnimationPopup from "./popup/AnimationPopup";

export class FguiManager {
  public static readonly instance: FguiManager = new FguiManager();

  public designWidth: number = 720;
  public designHeight: number = 1280;

  public width: number;
  public height: number;

  public loadingLayer: fgui.GComponent;
  public mainLayer: fgui.GComponent;
  public popupLayer: fgui.GComponent;
  public dialogLayer: fgui.GComponent;
  public tipsLayer: fgui.GComponent;
  public guideLayer: fgui.GComponent;
  public topLayer: fgui.GComponent;

  public rootView: UI_Root;
  public popupList: AnimationPopup[] = [];

  public toastView: UI_ToastView;

  public async initialize() {
    fgui.UIConfig.modalLayerColor = color(25, 25, 25, 200);
    fgui.UIConfig.buttonSound = "ui://Base/button";
    fgui.GRoot.create();
    fgui.UIObjectFactory.setLoaderExtension(CreatorGloader);

    // if((this.designWidth / this.designHeight) > (screen.windowSize.width / screen.windowSize.height))

    this.width = screen.windowSize.width;
    this.height = screen.windowSize.height;
    // this.width = fgui.GRoot.inst.width = screen.windowSize.width;
    // this.height = fgui.GRoot.inst.height = screen.windowSize.height;

    // this.width = fgui.GRoot.inst.width = this.designWidth;
    // this.height = fgui.GRoot.inst.height = Math.ceil(this.designWidth * screen.windowSize.height / screen.windowSize.width);

    console.log("width : " + this.width);
    console.log("height : " + this.height);

    let bundleGame: AssetManager.Bundle = await ResManager.instance.getBundle("game");
    console.log("bundleBase : " + bundleGame);
    await this.loadPackage(bundleGame, "ui/Base");
    BaseBinder.bindAll();
    // fgui.UIConfig.buttonSound = "ui://Base/button";
    //fgui.UIPackage.loadPackage(bundleBase, "ui/Base", this.onUILoaded.bind(this));

    // this.alertView = fgui.UIPackage.createObject("Base", "Alert") as UI_Alert;
    // this.toastView = fgui.UIPackage.createObject("Base", "Toast") as UI_Toast;

    // this.alertView.width = this.width;
    // this.alertView.height = this.height;

    this.rootView = fgui.UIPackage.createObject("Base", "Root") as UI_Root;
    this.rootView.makeFullScreen();
    fgui.GRoot.inst.addChild(this.rootView);

    this.mainLayer = this.rootView.m_com_game;
    this.popupLayer = this.rootView.m_com_popup;

    fgui.UIConfig.globalModalWaiting = "ui://Base/SceneMask";

    // this.alertView.makeFullScreen();
    // fgui.GRoot.inst.addChild(this.alertView);
  }

  public async loadPackage(bundle: AssetManager.Bundle, path: string) {
    return new Promise<void>(async (resolve, reject) => {
      fgui.UIPackage.loadPackage(bundle, path, function (): void {
        resolve();
      });
    });
  }

  public async createView(baseCtrl: BaseCtrl): Promise<fgui.GObject> {
    return new Promise(async (resolve, reject) => {
      if (baseCtrl.isMain) {
        let bundle: AssetManager.Bundle = ResManager.instance.getBundle(baseCtrl.bundle);

        if (bundle == null) {
          bundle = await ResManager.instance.loadBundle(baseCtrl.bundle);
        }

        await this.loadPackage(bundle, "ui/" + baseCtrl.pkgName);
        baseCtrl.onPkgLoad();
      }

      let component: fgui.GObject = fgui.UIPackage.createObject(baseCtrl.pkgName, baseCtrl.resName);
      baseCtrl._view = component;
      resolve(component);
    });
  }

  public async showView(baseCtrl: BaseCtrl): Promise<fgui.GObject> {
    return new Promise(async (resolve, reject) => {
      let comp: fgui.GObject;
      if (baseCtrl._view == null) {
        baseCtrl._view = await this.createView(baseCtrl);
      }
      // if(baseCtrl.isMain)
      // {
      //     let bundle:AssetManager.Bundle = ResManager.instance.getBundle(baseCtrl.bundle);

      //     if(bundle == null)
      //     {
      //         bundle = await ResManager.instance.loadBundle(baseCtrl.bundle);

      //     }

      //     await this.loadPackage(bundle, "ui/" + baseCtrl.pkgName);
      //     baseCtrl.onPkgLoad();

      // }

      // let component:fgui.GObject = fgui.UIPackage.createObject(baseCtrl.pkgName, baseCtrl.resName);
      if (baseCtrl.layer == 1) {
        // this.mainLayer.addChild(component);
      } else {
        // this.popupLayer.addChild(component);

        baseCtrl._view.center();
        //弹出窗口的动效已中心为轴心
        baseCtrl._view.setPivot(0.5, 0.5);
      }

      baseCtrl._view.makeFullScreen();
      fgui.GRoot.inst.addChild(baseCtrl._view);

      // baseCtrl.view = component;
      baseCtrl.onViewAdd();
      resolve(baseCtrl._view);
    });
  }

  public closeView(baseCtrl: BaseCtrl): void {
    baseCtrl.closeView();
  }

  public showPopup($popup: AnimationPopup): AnimationPopup {
    let popup = $popup;
    this.popupList.push($popup);

    // if(!popup.contentPane){
    //     let view:any = fgui.UIPackage.createObject($popup.pkgName, $popup.compName).asCom;
    //     popup.contentPane = view;

    // }

    popup.showModalWait();
    popup.show();

    return $popup;
  }

  public updatePopup(...args): void {
    let i: number;

    for (i = 0; i < this.popupList.length; i++) {
      this.popupList[i].update(args);
    }
  }

  public closePopup($popup: AnimationPopup): void {
    $popup.hide();

    let index = this.popupList.indexOf($popup);

    if (index >= 0) {
      this.popupList.splice(index, 1);
    }

    // this.popupList.pop();
    // $popup.doHideAnimation();
  }

  public closePopupImmediately($popup: AnimationPopup): void {
    $popup.hideImmediately();
  }

  public closeAllPopup(): void {
    while (this.popupList.length > 0) {
      this.closePopup(this.popupList[0]);
    }
  }

  public showToast($content: string): void {
    // if(this.toastView.parent == null){
    //     this.topLayer.addChild(this.toastView);
    // }
    // let script = this.toastView.getComponent("script");
    // let toastCtrl = this.toastView.getComponent("ToastCtrl");
    // if(script)
    // {
    //     script["showView"]($content);
    // }
    // if(toastCtrl)
    // {
    //     toastCtrl["showView"]($content);
    // }
    // console.log("this.toastView : " + this.toastView);
  }

  public hideToast(): void {
    this.topLayer.removeChild(this.toastView);
    console.log("close toast");
  }
}
