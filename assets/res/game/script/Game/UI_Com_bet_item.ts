/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Com_bet_item extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_c1:fgui.Controller;
	public m_n61:fgui.GGraph;
	public m_n62:fgui.GGraph;
	public m_tf_value:fgui.GTextField;
	public m_n64:fgui.GImage;
	public static URL:string = "ui://1as7p2p8f0bscq";

	public static createInstance():UI_Com_bet_item {
		return <UI_Com_bet_item>(fgui.UIPackage.createObject("Game", "Com_bet_item"));
	}

	protected onConstruct():void {
		this.m_button = this.getControllerAt(0);
		this.m_c1 = this.getControllerAt(1);
		this.m_n61 = <fgui.GGraph>(this.getChildAt(0));
		this.m_n62 = <fgui.GGraph>(this.getChildAt(1));
		this.m_tf_value = <fgui.GTextField>(this.getChildAt(2));
		this.m_n64 = <fgui.GImage>(this.getChildAt(3));
	}
}