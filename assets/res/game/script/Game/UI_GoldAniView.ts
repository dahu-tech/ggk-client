/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_GoldAniView extends fgui.GComponent {

	public m_ani:fgui.GLoader3D;
	public static URL:string = "ui://1as7p2p8ojgwi6";

	public static createInstance():UI_GoldAniView {
		return <UI_GoldAniView>(fgui.UIPackage.createObject("Game", "GoldAniView"));
	}

	protected onConstruct():void {
		this.m_ani = <fgui.GLoader3D>(this.getChildAt(0));
	}
}