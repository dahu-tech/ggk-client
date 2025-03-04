/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_speed_normal extends fgui.GButton {

	public m_btn_speed_normal:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ihx9bu";

	public static createInstance():UI_Btn_speed_normal {
		return <UI_Btn_speed_normal>(fgui.UIPackage.createObject("Game", "Btn_speed_normal"));
	}

	protected onConstruct():void {
		this.m_btn_speed_normal = <fgui.GImage>(this.getChildAt(0));
	}
}