/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Btn_auto from "./UI_Btn_auto";
import UI_Btn_stop_auto from "./UI_Btn_stop_auto";

export default class UI_Com_auto extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_btn_auto:UI_Btn_auto;
	public m_btn_stop_auto:UI_Btn_stop_auto;
	public static URL:string = "ui://1as7p2p8ihx9br";

	public static createInstance():UI_Com_auto {
		return <UI_Com_auto>(fgui.UIPackage.createObject("Game", "Com_auto"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_btn_auto = <UI_Btn_auto>(this.getChildAt(0));
		this.m_btn_stop_auto = <UI_Btn_stop_auto>(this.getChildAt(1));
	}
}