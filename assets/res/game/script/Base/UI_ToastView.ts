/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_ToastView extends fgui.GComponent {

	public m_n60:fgui.GImage;
	public m_tf_text:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://iaouwyjsq6fzf2";

	public static createInstance():UI_ToastView {
		return <UI_ToastView>(fgui.UIPackage.createObject("Base", "ToastView"));
	}

	protected onConstruct():void {
		this.m_n60 = <fgui.GImage>(this.getChildAt(0));
		this.m_tf_text = <fgui.GTextField>(this.getChildAt(1));
		this.m_t0 = this.getTransitionAt(0);
	}
}