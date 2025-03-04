/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_close extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n1:fgui.GImage;
	public static URL:string = "ui://iaouwyjsojei2m";

	public static createInstance():UI_Btn_close {
		return <UI_Btn_close>(fgui.UIPackage.createObject("Base", "Btn_close"));
	}

	protected onConstruct():void {
		this.m_button = this.getControllerAt(0);
		this.m_n1 = <fgui.GImage>(this.getChildAt(0));
	}
}