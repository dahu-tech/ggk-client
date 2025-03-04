/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_stop_auto extends fgui.GButton {

	public m_n16:fgui.GImage;
	public static URL:string = "ui://1as7p2p8f0bscu";

	public static createInstance():UI_Btn_stop_auto {
		return <UI_Btn_stop_auto>(fgui.UIPackage.createObject("Game", "Btn_stop_auto"));
	}

	protected onConstruct():void {
		this.m_n16 = <fgui.GImage>(this.getChildAt(0));
	}
}