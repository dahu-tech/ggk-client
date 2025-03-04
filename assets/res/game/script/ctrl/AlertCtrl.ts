import { TextUtil } from "../../../../script/utils/TextUtil";
import { FunctionCtrl } from "../../../../script/ctrl/FunctionCtrl";
import UI_AlertView from "../Base/UI_AlertView";
import { FguiManager } from "../FguiManager";
import { UiCompEnum, UiPackageEnum } from "../enum/UiEnum";

export class AlertCtrl extends FunctionCtrl {
    public static readonly instance: AlertCtrl = new AlertCtrl();

    public isMain:boolean = false;
    public bundle:string = "game";
    public pkgName:string = UiPackageEnum.BASE;
    public resName:string = UiCompEnum.AlertView;
    public layer:number = 2;

    public content:string;
    
    public constructor(){
        super();

    }

    public get alertView():UI_AlertView{
        return this._view as UI_AlertView;
    }

    public async initialize(){
        await FguiManager.instance.createView(this);
        
    }

    public async show(content:string){
        this.content = content;
        await FguiManager.instance.showView(this);
        
    }

    public onPkgLoad(){
        
    }

    public onViewAdd(){
        super.onViewAdd();

        let self = this;

        this.alertView.m_tf_content.text = this.content + "";
        this.alertView.m_btn_close.onClick(this.onViewClick, this);
        
    }

    public onViewClick():void{
        console.log("onViewClick");
        FguiManager.instance.closeView(this);

    }

    public closeView(): void {
        super.closeView();

    }

    public beforeViewRemove(): void {
        
    }

}