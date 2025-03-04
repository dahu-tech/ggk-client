/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_TipsContainer extends fgui.GLabel {

	public m_title:fgui.GTextField;
	public static URL:string = "ui://iaouwyjseuyv6g";

	public static createInstance():UI_TipsContainer {
		return <UI_TipsContainer>(fgui.UIPackage.createObject("Base", "TipsContainer"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChildAt(0));
	}
}