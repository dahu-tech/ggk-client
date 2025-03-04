/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_rules extends fgui.GButton {

	public m_n46:fgui.GImage;
	public static URL:string = "ui://1as7p2p8o2xzdv";

	public static createInstance():UI_Btn_rules {
		return <UI_Btn_rules>(fgui.UIPackage.createObject("Game", "Btn_rules"));
	}

	protected onConstruct():void {
		this.m_n46 = <fgui.GImage>(this.getChildAt(0));
	}
}