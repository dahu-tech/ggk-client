/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Com_star_item extends fgui.GComponent {

	public m_ani:fgui.GLoader3D;
	public static URL:string = "ui://1as7p2p8ojgwi5";

	public static createInstance():UI_Com_star_item {
		return <UI_Com_star_item>(fgui.UIPackage.createObject("Game", "Com_star_item"));
	}

	protected onConstruct():void {
		this.m_ani = <fgui.GLoader3D>(this.getChildAt(0));
	}
}