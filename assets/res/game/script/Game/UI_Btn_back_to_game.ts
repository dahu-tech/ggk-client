/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_back_to_game extends fgui.GButton {

	public m_n77:fgui.GImage;
	public static URL:string = "ui://1as7p2p8n832g9";

	public static createInstance():UI_Btn_back_to_game {
		return <UI_Btn_back_to_game>(fgui.UIPackage.createObject("Game", "Btn_back_to_game"));
	}

	protected onConstruct():void {
		this.m_n77 = <fgui.GImage>(this.getChildAt(0));
	}
}