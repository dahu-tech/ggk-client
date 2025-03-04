/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_support extends fgui.GButton {

	public m_n48:fgui.GImage;
	public static URL:string = "ui://1as7p2p8o2xzdx";

	public static createInstance():UI_Btn_support {
		return <UI_Btn_support>(fgui.UIPackage.createObject("Game", "Btn_support"));
	}

	protected onConstruct():void {
		this.m_n48 = <fgui.GImage>(this.getChildAt(0));
	}
}