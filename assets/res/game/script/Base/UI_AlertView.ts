/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Btn_close from "./UI_Btn_close";
import UI_Btn_ok from "./UI_Btn_ok";

export default class UI_AlertView extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n11:fgui.GGraph;
	public m_tf_content:fgui.GTextField;
	public m_btn_close:UI_Btn_close;
	public m_n13:fgui.GImage;
	public m_btn_ok:UI_Btn_ok;
	public m_n10:fgui.GGroup;
	public static URL:string = "ui://iaouwyjsl2k948";

	public static createInstance():UI_AlertView {
		return <UI_AlertView>(fgui.UIPackage.createObject("Base", "AlertView"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_n11 = <fgui.GGraph>(this.getChildAt(0));
		this.m_tf_content = <fgui.GTextField>(this.getChildAt(1));
		this.m_btn_close = <UI_Btn_close>(this.getChildAt(2));
		this.m_n13 = <fgui.GImage>(this.getChildAt(3));
		this.m_btn_ok = <UI_Btn_ok>(this.getChildAt(4));
		this.m_n10 = <fgui.GGroup>(this.getChildAt(5));
	}
}