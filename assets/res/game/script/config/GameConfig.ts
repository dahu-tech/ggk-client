export class ENV{
    public static DEV:string = "dev";
    public static STAGE:string = "stage";
    public static PROD:string = "prod";
    
}

export class GameConfig{
    public static env:string = ENV.DEV;

    public static get isDev():boolean{
        return this.env == ENV.DEV;

    }
}
