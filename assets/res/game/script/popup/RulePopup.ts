import { FguiManager } from "../FguiManager";
import { UiCompEnum, UiPackageEnum } from "../enum/UiEnum";
import { AniTypeEnum } from "../../../../script/enum/AniTypeEnum";
import AnimationPopup from "./AnimationPopup";
import UI_RuleView from "../Game/UI_RuleView";
import UI_Com_page_index from "../Game/UI_Com_page_index";
import { Lang } from "../../../../script/lang/Lang";
import { Meta } from "../../../../script/meta/Meta";

export class RulePopup extends AnimationPopup {
    public static readonly instance: RulePopup = new RulePopup();

    private pageIndex:number = 0;
    private comPageIndexList:UI_Com_page_index[];
    
    public constructor(){
        super(UiPackageEnum.GAME, UiCompEnum.RuleView);

    }

    public get view():UI_RuleView{
        return this.contentPane as UI_RuleView;
    }

    public initialize():void{
        super.initialize();

        this.view.m_btn_close.onClick(this.onViewClick, this);
        this.view.m_btn_preview.onClick(this.onBtnPreviewClick, this);
        this.view.m_btn_next.onClick(this.onBtnNextClick, this);
        
        this.view.m_img_rule_1.url = "bundle_game/icon/smt1";
        this.view.m_img_rule_2.url = "bundle_game/icon/smt2";
        this.view.m_img_rule_3.url = "bundle_game/icon/smt3";
        
    }

    public async open(){
        super.open();

        this.view.m_tf_rule1.text = Lang.translate("rule_1");
        this.view.m_tf_rule2.text = Lang.translate("rule_2");
        this.view.m_tf_rule3.text = Lang.translate("rule_3");
        
        this.pageIndex = 0;
        this.comPageIndexList = [this.view.m_com_page_index0, this.view.m_com_page_index1];
        this.showPage();
        
    }

    private showPage():void{
        this.view.m_c1.selectedIndex = this.pageIndex;
        this.view.m_btn_preview.enabled = this.pageIndex > 0;
        this.view.m_btn_next.enabled = this.pageIndex < 1;

        for(let i:number = 0; i < this.comPageIndexList.length; i ++){
            if(i == this.pageIndex){
                this.comPageIndexList[i].m_c1.selectedIndex = 1;
            }else{
                this.comPageIndexList[i].m_c1.selectedIndex = 0;
            }
            
        }
    }

    private onBtnPreviewClick():void{
        if(this.pageIndex > 0){
            this.pageIndex --;
            this.showPage();

        }
    }

    private onBtnNextClick():void{
        if(this.pageIndex < 1){
            this.pageIndex ++;
            this.showPage();

        }
    }

    public show():void
    {
        super.show();
        
        this.onViewAdd();

    }

    public onViewAdd(){

        let self = this;

        
        
    }

    public onViewClick():void{
        console.log("onViewClick");
        FguiManager.instance.closePopup(this);
        
    }

    public update(args):void
    {
        
    }

    public hide():void
    {
        super.hide();
        
    }

}