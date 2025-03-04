/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Btn_collect from "./UI_Btn_collect";
import UI_Btn_skip from "./UI_Btn_skip";

export default class UI_JpRewardView extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_ani_coin:fgui.GLoader3D;
	public m_ani_jp:fgui.GLoader3D;
	public m_tf_win:fgui.GTextField;
	public m_btn_collect:UI_Btn_collect;
	public m_btn_skip:UI_Btn_skip;
	public m_n3:fgui.GGroup;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://1as7p2p8o2xzdq";

	public static createInstance():UI_JpRewardView {
		return <UI_JpRewardView>(fgui.UIPackage.createObject("Game", "JpRewardView"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_ani_coin = <fgui.GLoader3D>(this.getChildAt(0));
		this.m_ani_jp = <fgui.GLoader3D>(this.getChildAt(1));
		this.m_tf_win = <fgui.GTextField>(this.getChildAt(2));
		this.m_btn_collect = <UI_Btn_collect>(this.getChildAt(3));
		this.m_btn_skip = <UI_Btn_skip>(this.getChildAt(4));
		this.m_n3 = <fgui.GGroup>(this.getChildAt(5));
		this.m_t0 = this.getTransitionAt(0);
	}
}