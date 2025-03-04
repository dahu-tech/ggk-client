/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Com_page_index extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n82:fgui.GGraph;
	public m_n80:fgui.GGraph;
	public static URL:string = "ui://1as7p2p8n832gb";

	public static createInstance():UI_Com_page_index {
		return <UI_Com_page_index>(fgui.UIPackage.createObject("Game", "Com_page_index"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_n82 = <fgui.GGraph>(this.getChildAt(0));
		this.m_n80 = <fgui.GGraph>(this.getChildAt(1));
	}
}