/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_Btn_spin from "./UI_Btn_spin";
import UI_Btn_stop from "./UI_Btn_stop";
import UI_Btn_free from "./UI_Btn_free";

export default class UI_Com_reveal extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_btn_spin:UI_Btn_spin;
	public m_btn_stop:UI_Btn_stop;
	public m_btn_free:UI_Btn_free;
	public m_n15:fgui.GLoader3D;
	public m_ani_free:fgui.GLoader3D;
	public static URL:string = "ui://1as7p2p8ihx9bv";

	public static createInstance():UI_Com_reveal {
		return <UI_Com_reveal>(fgui.UIPackage.createObject("Game", "Com_reveal"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_btn_spin = <UI_Btn_spin>(this.getChildAt(0));
		this.m_btn_stop = <UI_Btn_stop>(this.getChildAt(1));
		this.m_btn_free = <UI_Btn_free>(this.getChildAt(2));
		this.m_n15 = <fgui.GLoader3D>(this.getChildAt(3));
		this.m_ani_free = <fgui.GLoader3D>(this.getChildAt(4));
	}
}