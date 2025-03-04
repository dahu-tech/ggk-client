import IPopup from "./IPopup";
import * as fgui from "fairygui-cc";

export default class BasePopup extends fgui.Window implements IPopup
{
    public pkgName:string;
    public compName:string;

    public constructor($pkgName:string, $compName:string)
    {
        super();

        this.pkgName = $pkgName;
        this.compName = $compName;

        this.modal = true;

    }
    
    public show(args:any = null):void
    {
        super.show();

    }

    public update(args):void
    {
        
    }

    public hide():void
    {
        super.hide();
        
        this.closeModalWait();
        
    }

}
