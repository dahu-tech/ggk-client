/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Com_reward_jp_type extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n108:fgui.GImage;
	public m_n109:fgui.GImage;
	public m_n110:fgui.GImage;
	public m_n111:fgui.GImage;
	public static URL:string = "ui://1as7p2p8ojgwi1";

	public static createInstance():UI_Com_reward_jp_type {
		return <UI_Com_reward_jp_type>(fgui.UIPackage.createObject("Game", "Com_reward_jp_type"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_n108 = <fgui.GImage>(this.getChildAt(0));
		this.m_n109 = <fgui.GImage>(this.getChildAt(1));
		this.m_n110 = <fgui.GImage>(this.getChildAt(2));
		this.m_n111 = <fgui.GImage>(this.getChildAt(3));
	}
}