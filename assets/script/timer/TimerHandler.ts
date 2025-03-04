export class TimerHandler{
    public caller:any = null;
    public method:Function = null;
    public args:any = null;
    public userFrame:boolean;
    public repeat:boolean;
    public delay:number;
    public exeTime:number;
    public jumpFrame:number;
    public key:string;
    
    public clear():void {
        this.caller = null;
        this.method = null;
        this.args = null;
    }
    
    public run(withClear:boolean):void {
        var caller = this.caller;
        // if (caller && caller.destroyed)
        //     return this.clear();
        var method = this.method;
        var args = this.args;
        withClear && this.clear();
        if (method == null)
            return;
        args ? method.apply(caller, args) : method.call(caller);
    }
}