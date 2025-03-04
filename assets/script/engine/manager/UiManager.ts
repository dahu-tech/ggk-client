import { Asset, AssetManager, assetManager, Component, instantiate, Node, Prefab, Script, Texture2D } from "cc";
import { Main } from "../../../script/Main";

export class UiManager {
    public static readonly instance: UiManager = new UiManager();

    public width:number;
    public height:number;

    public loadingLayer:Node;
    public mainLayer:Node;
    public popupLayer:Node;
    public dialogLayer:Node;
    public tipsLayer:Node;
    public guideLayer:Node;
    public topLayer:Node;

    public alertPrefab:Prefab;
    public toastPrefab:Prefab;

    public alertView:Node;
    public toastView:Node;

    public initialize(root:Main, width:number, height:number, alertPrefab:Prefab = null, toastPrefab:Prefab = null)
    {
        this.width = width;
        this.height = height;

        this.loadingLayer = root.loadingLayer;
        this.mainLayer = root.mainLayer;
        this.popupLayer = root.popupLayer;
        this.dialogLayer = root.dialogLayer;
        this.tipsLayer = root.tipsLayer;
        this.guideLayer = root.guideLayer;
        this.topLayer = root.topLayer;

        this.alertPrefab = alertPrefab;
        this.toastPrefab = toastPrefab;

        this.alertView = instantiate(this.alertPrefab);
        this.toastView = instantiate(this.toastPrefab);
        
    }

    public showAlert():void
    {
        this.topLayer.addChild(this.alertView);
        console.log("this.alertView : " + this.alertView);

    }

    public hideAlert():void
    {
        this.topLayer.removeChild(this.alertView);
        console.log("close alert");
        
    }

    public showToast($content:string):void
    {
        if(this.toastView.parent == null){
            this.topLayer.addChild(this.toastView);
        }

        let script = this.toastView.getComponent("script");
        let toastCtrl = this.toastView.getComponent("ToastCtrl");

        if(script)
        {
            script["showView"]($content);
        }
        
        if(toastCtrl)
        {
            toastCtrl["showView"]($content);
        }
        
        console.log("this.toastView : " + this.toastView);

    }

    public hideToast():void
    {
        this.topLayer.removeChild(this.toastView);
        console.log("close toast");
        
    }

}

