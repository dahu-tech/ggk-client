/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_LoadingPackage extends fgui.GComponent {

	public m_n3:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://iaouwyjslzwb6i";

	public static createInstance():UI_LoadingPackage {
		return <UI_LoadingPackage>(fgui.UIPackage.createObject("Base", "LoadingPackage"));
	}

	protected onConstruct():void {
		this.m_n3 = <fgui.GImage>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}