/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_auto extends fgui.GButton {

	public m_n15:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ihx9bq";

	public static createInstance():UI_Btn_auto {
		return <UI_Btn_auto>(fgui.UIPackage.createObject("Game", "Btn_auto"));
	}

	protected onConstruct():void {
		this.m_n15 = <fgui.GImage>(this.getChildAt(0));
	}
}