/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_skip extends fgui.GButton {

	public m_n5:fgui.GImage;
	public static URL:string = "ui://1as7p2p8nkutfr";

	public static createInstance():UI_Btn_skip {
		return <UI_Btn_skip>(fgui.UIPackage.createObject("Game", "Btn_skip"));
	}

	protected onConstruct():void {
		this.m_n5 = <fgui.GImage>(this.getChildAt(0));
	}
}