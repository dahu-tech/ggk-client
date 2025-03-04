import { Asset, AssetManager, assetManager, Component, JsonAsset, Prefab, Texture2D } from "cc";
import { BundleType } from "../common";
import xx from "@xxyy/app";

export class ResManager {
  public static readonly instance: ResManager = new ResManager();
  private _abBundles: any = {};

  private _total: number = 0;
  private _now: number = 0;
  private _totalAb: number = 0
  private _nowAb: number = 0;
  private _progressFunc: Function = null;
  private _endFunc: Function = null;

  //#region utils
  public getBundle(bundle: BundleType) {
    if (bundle) {
      if (typeof bundle === "string") {
        return assetManager.getBundle(bundle);
      }
      return bundle;
    }
    return null;
  }

  public getAsset(bundle: BundleType, resUrl: string): any {
    let ab = this.getBundle(bundle);
    if (!ab) {
      xx.logger.error(`Asset Bundle没有加载。name: ${ab.name}`);
      return null;
    }
    return ab.get(resUrl);
  }

  public async loadRemote(url: string): Promise<Asset> {
    return new Promise((resolve, reject) => {
      assetManager.loadRemote(url, (err, data) => {
        if (err) {
          xx.logger.error(`加载远程资源异常。url:${url}`, err);
          reject(err);
        } else {
          data.addRef();
          resolve(data);
        }
      });
    });
  }
  //#endregion

  public async loadBundle(abName: string): Promise<AssetManager.Bundle> {
    return new Promise((resolve, reject) => {
      assetManager.loadBundle(abName, (err, bundle) => {
        if (err) {
          xx.logger.error(`加载AssetBundle异常。name: ${abName}`, err);
          this._abBundles[abName] = null;
          reject(err);
        } else {
          xx.logger.debug(`加载assetBundle成功。name: ${abName}`);
          this._abBundles[abName] = bundle;
          resolve(bundle);
        }
      });
      
    });
  }

  public async loadAsset(abBundle: AssetManager.Bundle, resUrl: string, assetType: any) {
    return new Promise((resolve, reject) => {
      abBundle.load(resUrl, assetType, (err, asset) => {
        if (err) {
          xx.logger.error(`加载资源Asset异常。abName: ${abBundle.name} resUrl: ${resUrl}`);
          reject(err);
        } else {
          xx.logger.debug(`加载资源Asset成功。abName: ${abBundle.name} resUrl: ${resUrl}`);
          resolve(asset);
        }
      });
    });
    //abBundle.config.paths.count;
  }
}

