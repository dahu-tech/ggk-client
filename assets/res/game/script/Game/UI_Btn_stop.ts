/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_stop extends fgui.GButton {

	public m_btn_stop:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ihx9bw";

	public static createInstance():UI_Btn_stop {
		return <UI_Btn_stop>(fgui.UIPackage.createObject("Game", "Btn_stop"));
	}

	protected onConstruct():void {
		this.m_btn_stop = <fgui.GImage>(this.getChildAt(0));
	}
}