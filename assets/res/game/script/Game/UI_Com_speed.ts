/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Btn_speed_fast from "./UI_Btn_speed_fast";
import UI_Btn_speed_normal from "./UI_Btn_speed_normal";

export default class UI_Com_speed extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_btn_speed_normal:UI_Btn_speed_fast;
	public m_btn_speed_fast:UI_Btn_speed_normal;
	public static URL:string = "ui://1as7p2p8ihx9bs";

	public static createInstance():UI_Com_speed {
		return <UI_Com_speed>(fgui.UIPackage.createObject("Game", "Com_speed"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_btn_speed_normal = <UI_Btn_speed_fast>(this.getChildAt(0));
		this.m_btn_speed_fast = <UI_Btn_speed_normal>(this.getChildAt(1));
	}
}