import { TextUtil } from "../../../../script/utils/TextUtil";
import { FunctionCtrl } from "../../../../script/ctrl/FunctionCtrl";
import UI_AlertView from "../Base/UI_AlertView";
import { UiCompEnum, UiPackageEnum } from "../enum/UiEnum";
import { FguiManager } from "../FguiManager";
import AnimationPopup from "./AnimationPopup";

export class AlertPopup extends AnimationPopup {
    public static ALERT:number = 1;
    public static CONFIRM:number = 2;
    public static readonly instance: AlertPopup = new AlertPopup();

    public content:string;
    public type:number;
    public confirmHandler:Function;
    public confirmArg:any;
    
    public constructor(){
        super(UiPackageEnum.BASE, UiCompEnum.AlertView);

    }

    public get view():UI_AlertView{
        return this.contentPane as UI_AlertView;
    }

    public async open(content:string = null, type:number = 1, confirmArg:any = null, confirmHandler:Function = null){
        this.content = content;
        this.type = type;
        this.confirmArg = confirmArg;
        this.confirmHandler = confirmHandler;

        super.open();
        
    }

    public show():void
    {
        super.show();
        
        this.onViewAdd();

    }

    public onViewAdd(){
        this.view.m_tf_content.text = this.content + "";
        this.view.m_btn_close.onClick(this.onViewClick, this);
        this.view.m_btn_ok.onClick(this.onBtnOkClick, this);

        this.view.m_c1.selectedIndex = this.type - 1;
        
    }

    private onBtnOkClick():void{
        this.onViewClick();

        if(this.confirmHandler){
            this.confirmHandler.call(this.confirmArg);
        }
        
    }

    public onViewClick():void{
        console.log("onViewClick");
        FguiManager.instance.closePopup(this);

    }

    public update(args):void
    {
        
    }

    public hideImmediately():void
    {
        super.hideImmediately();

    }

}