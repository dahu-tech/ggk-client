/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_sound extends fgui.GButton {

	public m_c1:fgui.Controller;
	public m_n47:fgui.GImage;
	public m_n48:fgui.GImage;
	public static URL:string = "ui://1as7p2p8o2xzdw";

	public static createInstance():UI_Btn_sound {
		return <UI_Btn_sound>(fgui.UIPackage.createObject("Game", "Btn_sound"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_n47 = <fgui.GImage>(this.getChildAt(0));
		this.m_n48 = <fgui.GImage>(this.getChildAt(1));
	}
}