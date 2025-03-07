import { Component, game, macro } from "cc";
import { TimerHandler } from "./TimerHandler";

export class Timer{
    public static instance:Timer;

    public scale:number;
    public currTimer:number;
    public currFrame:number;
    public _delta:number;
    public _lastTimer:number;
    public _map:any;
    public _handlers:TimerHandler[];
    public _temp:any[];
    public _count:number;

    public static _pool:TimerHandler[] = [];
    public _gid:number = 1;
    // Timer.gSysTimer = null;
    public static _mid = 1;

    public constructor(comp:Component, autoActive = true) {
        if(Timer.instance == null){
            Timer.instance = this;
            
        };

        this.scale = 1;
        this.currTimer = Date.now();
        this.currFrame = 0;
        this._delta = 0;
        this._lastTimer = Date.now();
        this._map = {};
        this._handlers = [];
        this._temp = [];
        this._count = 0;;
        autoActive && comp.schedule(this._update.bind(this), Math.floor(1000 / Number(game.frameRate)) / 1000, macro.REPEAT_FOREVER);//Timer.gSysTimer && Timer.gSysTimer.frameLoop(1, this, this._update);
    }
    get delta() {
        return this._delta;
    }
    _update() {
        if (this.scale <= 0) {
            this._lastTimer = Date.now();
            this._delta = 0;
            return;
        }
        var frame = this.currFrame = this.currFrame + this.scale;
        var now = Date.now();
        var awake = (now - this._lastTimer) > 30000;
        this._delta = (now - this._lastTimer) * this.scale;
        var timer = this.currTimer = this.currTimer + this._delta;
        this._lastTimer = now;
        var handlers = this._handlers;
        this._count = 0;
        for (var i = 0, n = handlers.length; i < n; i++) {
            var handler:TimerHandler = handlers[i];
            if (handler.method !== null) {
                var t = handler.userFrame ? frame : timer;
                if (t >= handler.exeTime) {
                    if (handler.repeat) {
                        if (!handler.jumpFrame || awake) {
                            handler.exeTime += handler.delay;
                            handler.run(false);
                            if (t > handler.exeTime) {
                                handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
                            }
                        }
                        else {
                            while (t >= handler.exeTime) {
                                handler.exeTime += handler.delay;
                                handler.run(false);
                            }
                        }
                    }
                    else {
                        handler.run(true);
                    }
                }
            }
            else {
                this._count++;
            }
        }
        if (this._count > 30 || frame % 200 === 0)
            this._clearHandlers();
    }
    _clearHandlers() {
        var handlers = this._handlers;
        for (var i = 0, n = handlers.length; i < n; i++) {
            var handler = handlers[i];
            if (handler.method !== null)
                this._temp.push(handler);
            else
                this._recoverHandler(handler);
        }
        this._handlers = this._temp;
        handlers.length = 0;
        this._temp = handlers;
    }
    _recoverHandler(handler) {
        if (this._map[handler.key] == handler)
            this._map[handler.key] = null;
        handler.clear();
        Timer._pool.push(handler);
    }
    _create(useFrame, repeat, delay, caller, method, args, coverBefore) {
        if (!delay) {
            method.apply(caller, args);
            return null;
        }
        if (coverBefore) {
            var handler = this._getHandler(caller, method);
            if (handler) {
                handler.repeat = repeat;
                handler.userFrame = useFrame;
                handler.delay = delay;
                handler.caller = caller;
                handler.method = method;
                handler.args = args;
                handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
                return handler;
            }
        }
        handler = Timer._pool.length > 0 ? Timer._pool.pop() : new TimerHandler();
        handler.repeat = repeat;
        handler.userFrame = useFrame;
        handler.delay = delay;
        handler.caller = caller;
        handler.method = method;
        handler.args = args;
        handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
        this._indexHandler(handler);
        this._handlers.push(handler);
        return handler;
    }
    _indexHandler(handler) {
        var caller = handler.caller;
        var method = handler.method;
        var cid = caller ? caller.$_GID || (caller.$_GID = this.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = Timer._mid++);
        handler.key = cid + "_" + mid;
        this._map[handler.key] = handler;
    }
    public once(delay, caller, method, args = null, coverBefore = true):void {
        this._create(false, false, delay, caller, method, args, coverBefore);
    }
    loop(delay, caller, method, args = null, coverBefore = true, jumpFrame = false) {
        var handler = this._create(false, true, delay, caller, method, args, coverBefore);
        if (handler)
            handler.jumpFrame = jumpFrame;
    }
    // frameOnce(delay, caller, method, args = null, coverBefore = true) {
    //     this._create(true, false, delay, caller, method, args, coverBefore);
    // }
    // frameLoop(delay, caller, method, args = null, coverBefore = true) {
    //     this._create(true, true, delay, caller, method, args, coverBefore);
    // }
    toString() {
        return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
    }
    clear(caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler) {
            this._map[handler.key] = null;
            handler.key = "";
            handler.clear();
        }
    }
    clearAll(caller) {
        if (!caller)
            return;
        for (var i = 0, n = this._handlers.length; i < n; i++) {
            var handler = this._handlers[i];
            if (handler.caller === caller) {
                this._map[handler.key] = null;
                handler.key = "";
                handler.clear();
            }
        }
    }
    _getHandler(caller, method) {
        var cid = caller ? caller.$_GID || (caller.$_GID = this.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = Timer._mid++);
        var key = cid + "_" + mid;
        return this._map[key];
    }
    // callLater(caller, method, args = null) {
    //     CallLater.I.callLater(caller, method, args);
    // }
    // runCallLater(caller, method) {
    //     CallLater.I.runCallLater(caller, method);
    // }
    runTimer(caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run(true);
        }
    }
    pause() {
        this.scale = 0;
    }
    resume() {
        this.scale = 1;
    }

    public getGID():number{
        return this._gid++;
    }
}