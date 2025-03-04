/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

import UI_TipsContainer from "./UI_TipsContainer";
import UI_Btn_ok from "./UI_Btn_ok";
import UI_AlertView from "./UI_AlertView";
import UI_LoadingView from "./UI_LoadingView";
import UI_Pb_loading from "./UI_Pb_loading";
import UI_LoadingPackage from "./UI_LoadingPackage";
import UI_Btn_close from "./UI_Btn_close";
import UI_SceneMask from "./UI_SceneMask";
import UI_WindowMask from "./UI_WindowMask";
import UI_ToastView from "./UI_ToastView";
import UI_Root from "./UI_Root";
import UI_Com_layer from "./UI_Com_layer";

export default class BaseBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_TipsContainer.URL, UI_TipsContainer);
		fgui.UIObjectFactory.setExtension(UI_Btn_ok.URL, UI_Btn_ok);
		fgui.UIObjectFactory.setExtension(UI_AlertView.URL, UI_AlertView);
		fgui.UIObjectFactory.setExtension(UI_LoadingView.URL, UI_LoadingView);
		fgui.UIObjectFactory.setExtension(UI_Pb_loading.URL, UI_Pb_loading);
		fgui.UIObjectFactory.setExtension(UI_LoadingPackage.URL, UI_LoadingPackage);
		fgui.UIObjectFactory.setExtension(UI_Btn_close.URL, UI_Btn_close);
		fgui.UIObjectFactory.setExtension(UI_SceneMask.URL, UI_SceneMask);
		fgui.UIObjectFactory.setExtension(UI_WindowMask.URL, UI_WindowMask);
		fgui.UIObjectFactory.setExtension(UI_ToastView.URL, UI_ToastView);
		fgui.UIObjectFactory.setExtension(UI_Root.URL, UI_Root);
		fgui.UIObjectFactory.setExtension(UI_Com_layer.URL, UI_Com_layer);
	}
}