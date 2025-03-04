/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_spin extends fgui.GButton {

	public m_n12:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ihx9bg";

	public static createInstance():UI_Btn_spin {
		return <UI_Btn_spin>(fgui.UIPackage.createObject("Game", "Btn_spin"));
	}

	protected onConstruct():void {
		this.m_n12 = <fgui.GImage>(this.getChildAt(0));
	}
}