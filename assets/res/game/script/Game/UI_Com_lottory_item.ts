/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Com_reward_jp_type from "./UI_Com_reward_jp_type";

export default class UI_Com_lottory_item extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n104:fgui.GImage;
	public m_img_right:fgui.GImage;
	public m_tf_num:fgui.GTextField;
	public m_tf_reward:fgui.GTextField;
	public m_com_reward_jp_type:UI_Com_reward_jp_type;
	public m_n103:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://1as7p2p8mtruhx";

	public static createInstance():UI_Com_lottory_item {
		return <UI_Com_lottory_item>(fgui.UIPackage.createObject("Game", "Com_lottory_item"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_n104 = <fgui.GImage>(this.getChildAt(0));
		this.m_img_right = <fgui.GImage>(this.getChildAt(1));
		this.m_tf_num = <fgui.GTextField>(this.getChildAt(2));
		this.m_tf_reward = <fgui.GTextField>(this.getChildAt(3));
		this.m_com_reward_jp_type = <UI_Com_reward_jp_type>(this.getChildAt(4));
		this.m_n103 = <fgui.GImage>(this.getChildAt(5));
		this.m_t0 = this.getTransitionAt(0);
	}
}