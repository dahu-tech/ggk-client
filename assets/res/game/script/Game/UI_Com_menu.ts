/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Btn_rules from "./UI_Btn_rules";
import UI_Btn_sound from "./UI_Btn_sound";
import UI_Btn_support from "./UI_Btn_support";

export default class UI_Com_menu extends fgui.GComponent {

	public m_n53:fgui.GGraph;
	public m_btn_rules:UI_Btn_rules;
	public m_btn_sound:UI_Btn_sound;
	public m_btn_support:UI_Btn_support;
	public static URL:string = "ui://1as7p2p8k15r65";

	public static createInstance():UI_Com_menu {
		return <UI_Com_menu>(fgui.UIPackage.createObject("Game", "Com_menu"));
	}

	protected onConstruct():void {
		this.m_n53 = <fgui.GGraph>(this.getChildAt(0));
		this.m_btn_rules = <UI_Btn_rules>(this.getChildAt(1));
		this.m_btn_sound = <UI_Btn_sound>(this.getChildAt(2));
		this.m_btn_support = <UI_Btn_support>(this.getChildAt(3));
	}
}