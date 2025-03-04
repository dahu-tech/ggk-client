/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_recharge extends fgui.GButton {

	public m_n3:fgui.GImage;
	public static URL:string = "ui://1as7p2p8r8771q";

	public static createInstance():UI_Btn_recharge {
		return <UI_Btn_recharge>(fgui.UIPackage.createObject("Game", "Btn_recharge"));
	}

	protected onConstruct():void {
		this.m_n3 = <fgui.GImage>(this.getChildAt(0));
	}
}