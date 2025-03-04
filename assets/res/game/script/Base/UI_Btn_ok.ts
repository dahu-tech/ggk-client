/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_ok extends fgui.GButton {

	public m_n11:fgui.GImage;
	public static URL:string = "ui://iaouwyjsj4c8fo";

	public static createInstance():UI_Btn_ok {
		return <UI_Btn_ok>(fgui.UIPackage.createObject("Base", "Btn_ok"));
	}

	protected onConstruct():void {
		this.m_n11 = <fgui.GImage>(this.getChildAt(0));
	}
}