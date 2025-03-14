/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Pb_loading from "./UI_Pb_loading";

export default class UI_LoadingView extends fgui.GComponent {

	public m_n5:fgui.GGraph;
	public m_n3:fgui.GImage;
	public m_n4:fgui.GImage;
	public m_pb_loading:UI_Pb_loading;
	public static URL:string = "ui://iaouwyjslwfqf8";

	public static createInstance():UI_LoadingView {
		return <UI_LoadingView>(fgui.UIPackage.createObject("Base", "LoadingView"));
	}

	protected onConstruct():void {
		this.m_n5 = <fgui.GGraph>(this.getChildAt(0));
		this.m_n3 = <fgui.GImage>(this.getChildAt(1));
		this.m_n4 = <fgui.GImage>(this.getChildAt(2));
		this.m_pb_loading = <UI_Pb_loading>(this.getChildAt(3));
	}
}