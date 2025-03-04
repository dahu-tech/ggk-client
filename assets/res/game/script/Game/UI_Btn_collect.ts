/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_collect extends fgui.GButton {

	public m_n2:fgui.GImage;
	public static URL:string = "ui://1as7p2p8o2xze4";

	public static createInstance():UI_Btn_collect {
		return <UI_Btn_collect>(fgui.UIPackage.createObject("Game", "Btn_collect"));
	}

	protected onConstruct():void {
		this.m_n2 = <fgui.GImage>(this.getChildAt(0));
	}
}