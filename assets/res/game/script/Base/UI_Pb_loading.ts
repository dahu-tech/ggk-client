/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Pb_loading extends fgui.GProgressBar {

	public m_n2:fgui.GImage;
	public m_bar:fgui.GImage;
	public m_n4:fgui.GTextField;
	public m_title:fgui.GTextField;
	public static URL:string = "ui://iaouwyjslwfqf9";

	public static createInstance():UI_Pb_loading {
		return <UI_Pb_loading>(fgui.UIPackage.createObject("Base", "Pb_loading"));
	}

	protected onConstruct():void {
		this.m_n2 = <fgui.GImage>(this.getChildAt(0));
		this.m_bar = <fgui.GImage>(this.getChildAt(1));
		this.m_n4 = <fgui.GTextField>(this.getChildAt(2));
		this.m_title = <fgui.GTextField>(this.getChildAt(3));
	}
}