import { Asset, AssetManager } from "cc";

export type AssetType = new (...args: any[]) => Asset;
export type BundleType = AssetManager.Bundle | string;