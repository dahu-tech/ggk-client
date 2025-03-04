/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_bet extends fgui.GButton {

	public m_n14:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ihx9bj";

	public static createInstance():UI_Btn_bet {
		return <UI_Btn_bet>(fgui.UIPackage.createObject("Game", "Btn_bet"));
	}

	protected onConstruct():void {
		this.m_n14 = <fgui.GImage>(this.getChildAt(0));
	}
}