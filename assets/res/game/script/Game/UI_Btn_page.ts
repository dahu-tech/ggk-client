/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_page extends fgui.GComponent {

	public m_n78:fgui.GImage;
	public static URL:string = "ui://1as7p2p8n832ga";

	public static createInstance():UI_Btn_page {
		return <UI_Btn_page>(fgui.UIPackage.createObject("Game", "Btn_page"));
	}

	protected onConstruct():void {
		this.m_n78 = <fgui.GImage>(this.getChildAt(0));
	}
}