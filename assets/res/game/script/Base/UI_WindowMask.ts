/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_WindowMask extends fgui.GComponent {

	public m_n0:fgui.GGraph;
	public static URL:string = "ui://iaouwyjsowxifb";

	public static createInstance():UI_WindowMask {
		return <UI_WindowMask>(fgui.UIPackage.createObject("Base", "WindowMask"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GGraph>(this.getChildAt(0));
	}
}