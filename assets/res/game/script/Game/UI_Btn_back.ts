/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_back extends fgui.GButton {

	public m_n2:fgui.GImage;
	public static URL:string = "ui://1as7p2p8r8771p";

	public static createInstance():UI_Btn_back {
		return <UI_Btn_back>(fgui.UIPackage.createObject("Game", "Btn_back"));
	}

	protected onConstruct():void {
		this.m_n2 = <fgui.GImage>(this.getChildAt(0));
	}
}