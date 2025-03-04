/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_menu extends fgui.GButton {

	public m_n4:fgui.GImage;
	public static URL:string = "ui://1as7p2p8r8771r";

	public static createInstance():UI_Btn_menu {
		return <UI_Btn_menu>(fgui.UIPackage.createObject("Game", "Btn_menu"));
	}

	protected onConstruct():void {
		this.m_n4 = <fgui.GImage>(this.getChildAt(0));
	}
}