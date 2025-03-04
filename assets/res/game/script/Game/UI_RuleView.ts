/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Btn_back_to_game from "./UI_Btn_back_to_game";
import UI_Btn_page from "./UI_Btn_page";
import UI_Com_page_index from "./UI_Com_page_index";

export default class UI_RuleView extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n9:fgui.GGraph;
	public m_tf_rule1:fgui.GTextField;
	public m_img_rule_1:fgui.GLoader;
	public m_group1:fgui.GGroup;
	public m_n116:fgui.GGraph;
	public m_tf_rule2:fgui.GTextField;
	public m_tf_rule3:fgui.GTextField;
	public m_img_rule_2:fgui.GLoader;
	public m_img_rule_3:fgui.GLoader;
	public m_group2:fgui.GGroup;
	public m_btn_close:UI_Btn_back_to_game;
	public m_btn_preview:UI_Btn_page;
	public m_btn_next:UI_Btn_page;
	public m_com_page_index0:UI_Com_page_index;
	public m_com_page_index1:UI_Com_page_index;
	public m_n86:fgui.GGroup;
	public m_tf_rule_title:fgui.GTextField;
	public static URL:string = "ui://1as7p2p8n832g8";

	public static createInstance():UI_RuleView {
		return <UI_RuleView>(fgui.UIPackage.createObject("Game", "RuleView"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_n9 = <fgui.GGraph>(this.getChildAt(0));
		this.m_tf_rule1 = <fgui.GTextField>(this.getChildAt(1));
		this.m_img_rule_1 = <fgui.GLoader>(this.getChildAt(2));
		this.m_group1 = <fgui.GGroup>(this.getChildAt(3));
		this.m_n116 = <fgui.GGraph>(this.getChildAt(4));
		this.m_tf_rule2 = <fgui.GTextField>(this.getChildAt(5));
		this.m_tf_rule3 = <fgui.GTextField>(this.getChildAt(6));
		this.m_img_rule_2 = <fgui.GLoader>(this.getChildAt(7));
		this.m_img_rule_3 = <fgui.GLoader>(this.getChildAt(8));
		this.m_group2 = <fgui.GGroup>(this.getChildAt(9));
		this.m_btn_close = <UI_Btn_back_to_game>(this.getChildAt(10));
		this.m_btn_preview = <UI_Btn_page>(this.getChildAt(11));
		this.m_btn_next = <UI_Btn_page>(this.getChildAt(12));
		this.m_com_page_index0 = <UI_Com_page_index>(this.getChildAt(13));
		this.m_com_page_index1 = <UI_Com_page_index>(this.getChildAt(14));
		this.m_n86 = <fgui.GGroup>(this.getChildAt(15));
		this.m_tf_rule_title = <fgui.GTextField>(this.getChildAt(16));
	}

	private $LANG_INFO = {"tf_rule1":{"key":"rule_1","value":"Scratch the Lucky Star to try to win prizes. In the game, just match a winnning number to win the corresponding amount below the number"},"tf_rule2":{"key":"rule_2","value":"For every 10 tickets, get one for free."},"tf_rule3":{"key":"rule_3","value":"Light up the 5 winning numbers and get the extra JACKPOT big prize!"},"tf_rule_title":{"key":"rule_title","value":"Instructions"}};

	private showLang():void {
	}
}