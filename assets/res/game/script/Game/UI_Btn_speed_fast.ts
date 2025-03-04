/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_speed_fast extends fgui.GButton {

	public m_n55:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ihx9bt";

	public static createInstance():UI_Btn_speed_fast {
		return <UI_Btn_speed_fast>(fgui.UIPackage.createObject("Game", "Btn_speed_fast"));
	}

	protected onConstruct():void {
		this.m_n55 = <fgui.GImage>(this.getChildAt(0));
	}
}