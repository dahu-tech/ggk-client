import { Asset, AssetManager, assetManager, ImageAsset, isValid, resources, SpriteFrame, Texture2D } from "cc";
import { GLoader } from "fairygui-cc";
import { ResManager } from "../engine/manager/ResManager";

export class CreatorGloader extends GLoader
{
    loadExternal() {
        let url = this.url;
        let callback = (err, asset) => {
            //因为是异步返回的，而这时可能url已经被改变，所以不能直接用返回的结果
            if (this.url != url || !isValid(this._node))
                return;
            if (err)
                console.warn(err);
            if (asset instanceof SpriteFrame)
                this.onExternalLoadSuccess(asset);
            else if (asset instanceof Texture2D) {
                let sf = new SpriteFrame();
                sf.texture = asset;
                this.onExternalLoadSuccess(sf);
            }
            else if (asset instanceof ImageAsset) {
                let sf = new SpriteFrame();
                let texture = new Texture2D();
                texture.image = asset;
                sf.texture = texture;
                this.onExternalLoadSuccess(sf);
            }
        };

        let bundlePrefix:string = "bundle_";

        if(this.url.startsWith(bundlePrefix))
        {
            let sepIndex:number = this.url.indexOf("/");
            let bundleName:string = this.url.substring(bundlePrefix.length, sepIndex);
            let resName:string = this.url.substring(sepIndex + 1, this.url.length);

            let bundle:AssetManager.Bundle = ResManager.instance.getBundle(bundleName);
            bundle.load(resName + "/spriteFrame", Asset, callback);

        }
        else if (this.url.startsWith("http://")
            || this.url.startsWith("https://")
            || this.url.startsWith('/'))
            assetManager.loadRemote(this.url, callback);
        else
            resources.load(this.url + "/spriteFrame", Asset, callback);
    }
}