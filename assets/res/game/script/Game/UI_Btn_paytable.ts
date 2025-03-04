/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_paytable extends fgui.GButton {

	public m_n11:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ihx9bh";

	public static createInstance():UI_Btn_paytable {
		return <UI_Btn_paytable>(fgui.UIPackage.createObject("Game", "Btn_paytable"));
	}

	protected onConstruct():void {
		this.m_n11 = <fgui.GImage>(this.getChildAt(0));
	}
}