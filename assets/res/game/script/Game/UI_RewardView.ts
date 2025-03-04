/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_RewardView extends fgui.GComponent {

	public m_tf_win:fgui.GTextField;
	public static URL:string = "ui://1as7p2p8qjgqdh";

	public static createInstance():UI_RewardView {
		return <UI_RewardView>(fgui.UIPackage.createObject("Game", "RewardView"));
	}

	protected onConstruct():void {
		this.m_tf_win = <fgui.GTextField>(this.getChildAt(0));
	}
}