/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_SceneMask extends fgui.GComponent {

	public m_n0:fgui.GGraph;
	public static URL:string = "ui://iaouwyjsowxifa";

	public static createInstance():UI_SceneMask {
		return <UI_SceneMask>(fgui.UIPackage.createObject("Base", "SceneMask"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GGraph>(this.getChildAt(0));
	}
}