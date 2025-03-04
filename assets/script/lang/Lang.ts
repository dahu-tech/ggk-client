import { JsonAsset } from "cc";

export class Lang{
    private static content:any = {};
    public static initialize(langJson:any){
        this.content = {};

        for(let key in langJson.label){
            this.content[key] = langJson.label[key];
        }
        
        for(let key in langJson.txt){
            this.content[key] = langJson.txt[key];
        }
        
    }

    public static translate(key:string, replaces:any[] = []):string{
        if(this.content[key] != null){
            let value:string = this.content[key];
            if(replaces.length > 0){
                for(let i:number = 0; i < replaces.length; i ++){
                    value = value.replace(`{${(i + 1)}}`, replaces[0])
                }
            }
            return value;
        }
        return key;
    }
}