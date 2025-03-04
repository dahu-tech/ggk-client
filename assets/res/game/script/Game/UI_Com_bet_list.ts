/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Com_bet_list extends fgui.GComponent {

	public m_n59:fgui.GImage;
	public m_n60:fgui.GTextField;
	public m_list_bet:fgui.GList;
	public static URL:string = "ui://1as7p2p8f0bscr";

	public static createInstance():UI_Com_bet_list {
		return <UI_Com_bet_list>(fgui.UIPackage.createObject("Game", "Com_bet_list"));
	}

	protected onConstruct():void {
		this.m_n59 = <fgui.GImage>(this.getChildAt(0));
		this.m_n60 = <fgui.GTextField>(this.getChildAt(1));
		this.m_list_bet = <fgui.GList>(this.getChildAt(2));
	}

	private $LANG_INFO = {"n60":{"key":"totle_bet_title","value":"Bet Options Total Bet"}};

	private showLang():void {
	}
}