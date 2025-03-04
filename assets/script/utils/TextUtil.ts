import { Meta } from "../meta/Meta";
import { LoadDto } from "../net/game/data-contracts";
import xx from "@xxyy/app";

export class TextUtil{
    public static fixMoneyNumber(value:number, amount:number = 2):string{
        if(value >= 1000000000){
            return Math.floor(value / 1000) + "K";
        }else{
            return this.fixNumber(value, amount);
        }
        
    }

    public static fixNumber(value:number, amount:number = 2):string{
        let numStr:string[] = (value + "").split(".");
        // let zhengshu:number = (value * Math.pow(10, amount));
        // let xiaoshu:number = zhengshu - Math.floor(zhengshu / 1);
        let resultStr = "";
        if(numStr.length > 1){
            if(numStr[1].length <= 2){
                resultStr = value.toFixed(2);
            }else{
                resultStr = numStr[0] + "." + numStr[1].substring(0, 2);
            }
            
        }else{
            resultStr = value.toFixed(2);
        }

        if(xx.config.countryId == "BRA"){
            return resultStr.replace(".", ",");
        }else{
            return resultStr;
        }
        
        // return (Math.floor((value * Math.pow(10, amount))) / Math.pow(10, amount)).toFixed(amount);

    }

    public static formatNumber(value:number):string{
        let numStr:string[] = (value + "").split(".");
        let resultStr = "";
        let len = Math.floor((numStr[0].length - 1) / 3);
        for(let i:number = 0; i < len; i ++){
            resultStr += numStr[0].substring(0 + numStr.length - len * 3, numStr.length - len * 3)
        }
        if(numStr.length > 1){
            if(numStr[1].length <= 2){
                resultStr = value.toFixed(2);
            }else{
                resultStr = numStr[0] + "." + numStr[1].substring(0, 2);
            }
            
        }else{
            resultStr = value.toFixed(2);
        }

        if(xx.config.countryId == "BRA"){
            return resultStr.replace(".", ",");
        }else{
            return resultStr;
        }
        
        // return (Math.floor((value * Math.pow(10, amount))) / Math.pow(10, amount)).toFixed(amount);

    }

    public static getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    public static getYmdByTimestamp(timestamp:number, seperator:string = "/"):string{
        let dateStr:string = "";
        let time:Date = new Date(timestamp);
        let year:number = time.getFullYear();
        let month:number = time.getMonth() + 1;
        let date:number = time.getDate();

        if(month < 10){
            dateStr = "0" + month + seperator;
        }else{
            dateStr = month + seperator;
        }
        
        if(date < 10){
            dateStr = dateStr + "0" + date + seperator;
        }else{
            dateStr = dateStr + date + seperator;
        }

        dateStr += year;

        return dateStr;
        
    }

    public static getHmsByTimestamp(timestamp:number, seperator:string = "-"):string{
        let dateStr:string = "";
        let time:Date = new Date(timestamp);
        let hour:number = time.getHours();
        let min:number = time.getMinutes();
        let sec:number = time.getSeconds();

        if(hour < 10){
            dateStr = "0" + hour + seperator;
        }else{
            dateStr = hour + seperator;
        }
        
        if(min < 10){
            dateStr = dateStr + "0" + min + seperator;
        }else{
            dateStr = dateStr + min + seperator;
        }

        if(sec < 10){
            dateStr = dateStr + "0" + sec;
        }else{
            dateStr = dateStr + sec;
        }

        return dateStr;
        
    }

}