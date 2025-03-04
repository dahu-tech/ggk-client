import { ViewCtrl } from "../../../../script/ctrl/ViewCtrl";
import UI_LoadingView from "../Base/UI_LoadingView";
import { FguiManager } from "../FguiManager";

export class LoadingCtrl extends ViewCtrl {
    public static readonly instance: LoadingCtrl = new LoadingCtrl();

    public isMain:boolean = false;
    public bundle:string = "base";
    public pkgName:string = "Base";
    public resName:string = "LoadingView";
    public layer:number = 1;

    public constructor(){
        super();

        this.aniType = 0;

    }

    public get view():UI_LoadingView{
        return this._view as UI_LoadingView;
    }

    public async initialize(){
        await FguiManager.instance.showView(this);
        
    }

    public onPkgLoad(){

    }

    public onViewAdd(){
        super.onViewAdd();

        let self = this;

        // this.loadingView.m_img_bg.url = "bundle_game/icon/loading";
        
    }

    public setProgress(value:number){
        this.view.m_pb_loading.tweenValue(value, 0.5);
        
    }

    public closeView(): void {
        
    }

    public beforeViewRemove(): void {
        
    }

}