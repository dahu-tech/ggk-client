/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Com_layer from "./UI_Com_layer";

export default class UI_Root extends fgui.GComponent {

	public m_com_game:UI_Com_layer;
	public m_com_popup:UI_Com_layer;
	public static URL:string = "ui://iaouwyjsq6fzf3";

	public static createInstance():UI_Root {
		return <UI_Root>(fgui.UIPackage.createObject("Base", "Root"));
	}

	protected onConstruct():void {
		this.m_com_game = <UI_Com_layer>(this.getChildAt(0));
		this.m_com_popup = <UI_Com_layer>(this.getChildAt(1));
	}
}