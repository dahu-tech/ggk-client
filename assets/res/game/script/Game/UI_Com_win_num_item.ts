/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Com_win_num_item extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_img_right:fgui.GImage;
	public m_n89:fgui.GImage;
	public m_tf_num:fgui.GTextField;
	public static URL:string = "ui://1as7p2p8mtruht";

	public static createInstance():UI_Com_win_num_item {
		return <UI_Com_win_num_item>(fgui.UIPackage.createObject("Game", "Com_win_num_item"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_img_right = <fgui.GImage>(this.getChildAt(0));
		this.m_n89 = <fgui.GImage>(this.getChildAt(1));
		this.m_tf_num = <fgui.GTextField>(this.getChildAt(2));
	}
}