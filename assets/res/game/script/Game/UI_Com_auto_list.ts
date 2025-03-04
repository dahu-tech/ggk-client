/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Com_auto_list extends fgui.GComponent {

	public m_n59:fgui.GImage;
	public m_n60:fgui.GTextField;
	public m_list_autospin:fgui.GList;
	public static URL:string = "ui://1as7p2p8f0bscs";

	public static createInstance():UI_Com_auto_list {
		return <UI_Com_auto_list>(fgui.UIPackage.createObject("Game", "Com_auto_list"));
	}

	protected onConstruct():void {
		this.m_n59 = <fgui.GImage>(this.getChildAt(0));
		this.m_n60 = <fgui.GTextField>(this.getChildAt(1));
		this.m_list_autospin = <fgui.GList>(this.getChildAt(2));
	}

	private $LANG_INFO = {"n60":{"key":"auto_spin_title","value":"Autoplay Options Number Of Bets"}};

	private showLang():void {
	}
}