import { Asset, AssetManager, AudioClip, AudioSource, clamp01, Component, Node } from "cc";
import { BundleType } from "../common";

import { ResManager } from "./ResManager";
import xx from "@xxyy/app";

export class AudioManager {
  public static readonly instance: AudioManager = new AudioManager();
  public static root: Node = null;
  public static audioSource: AudioSource = null;
  public static init(root: Node) {
    this.root = root;
    this.audioSource = this.root.addComponent(AudioSource);
    this.audioSource.playOnAwake = false;
  }

  public get audio(): AudioSource {
    return AudioManager.audioSource;
  }

  //#region config
  private readonly _musicOnKey: string = "music_on";
  private readonly _musicVolumeKey: string = "music_volume";
  private readonly _soundOnKey: string = "sound_on";
  private readonly _soundVolumeKey: string = "sound_volume";

  private _isMusicOn: boolean = null;
  public get isMusicOn(): boolean {
    if (!this._isMusicOn) {
      this._isMusicOn = xx.localStorage.get(this._musicOnKey, true);
    }
    return this._isMusicOn;
  }
  public set isMusicOn(val: boolean) {
    this._isMusicOn = val;
    xx.localStorage.set(this._musicOnKey, val);
  }
  private _musicVolume: number = null;
  public get musicVolume(): number {
    if (!this._musicVolume) {
      this._musicVolume = xx.localStorage.get(this._musicVolumeKey, 1);
    }
    return this._musicVolume;
  }
  public set musicVolume(val: number) {
    this._musicVolume = clamp01(val);
    xx.localStorage.set(this._musicVolumeKey, this._musicVolume);
    this.audio.volume = this._musicVolume;
  }

  private _isSoundOn: boolean = null;
  public get isSoundOn(): boolean {
    if (!this._isSoundOn) {
      this._isSoundOn = xx.localStorage.get(this._soundOnKey, true);
    }
    return this._isSoundOn;
  }
  public set isSoundOn(val: boolean) {
    this._isSoundOn = val;
    xx.localStorage.set(this._soundOnKey, val);
  }

  private _soundVolume: number = null;
  public get soundVolume(): number {
    if (!this._soundVolume) {
      this._soundVolume = xx.localStorage.get(this._soundVolumeKey, 1);
    }
    return this._soundVolume;
  }
  public set soundVolume(val: number) {
    this._soundVolume = clamp01(val);
    xx.localStorage.set(this._soundVolumeKey, this._soundVolume);
  }
  //#endregion

  private _currentMusicKey: string = null;
  public musicInfos: Map<string, AudioClip> = new Map();
  public soundInfos: Map<string, AudioClip> = new Map();

  public async playSound(url: string, bundle: AssetManager.Bundle) {
    if (!this.isSoundOn) { return; }
    let key = this._getKey(url, bundle);
    let sound = this.soundInfos.get(key);
    if (!sound) {
      await ResManager.instance.loadAsset(bundle, url, Asset);
      sound = ResManager.instance.getAsset(bundle, url);
      if (!sound) {
        xx.logger.error(`音效文件没有加载。bundle: ${bundle} url: ${url}`);
        return;
      }
      sound.addRef();
    }
    this.audio.playOneShot(sound, this.audio.volume ? this.soundVolume / this.audio.volume : 0);
  }

  private _getKey(url: string, bundle: BundleType): string {
    return `${ResManager.instance.getBundle(bundle)?.name}_${url}`;
  }

  public async playMusic(url: string, bundle: AssetManager.Bundle, loop: boolean = true): Promise<void> {
    if (!this.isMusicOn) { return; }
    let key = this._getKey(url, bundle);
    if (key != this._currentMusicKey) {
      this.musicInfos.get(this._currentMusicKey)?.decRef(); //旧的
      let music = this.musicInfos.get(key);
      if (!music) {
        let sound:any = await ResManager.instance.loadAsset(bundle, url, Asset);
        music = ResManager.instance.getAsset(bundle, url);
        if (!music) {
          xx.logger.error(`音乐文件没有加载。bundle: ${bundle} url: ${url}`);
          return;
        }
        music.addRef();
      }
      this._currentMusicKey = key;
      this.audio.clip = music;
      this.audio.volume = this.musicVolume;
      this.audio.loop = loop;
    }
    this.resumeMusic();
  }
  public stopMusic(): void {
    this.audio.stop();
  }
  public pauseMusic(): void {
    this.audio.pause();
  }
  public resumeMusic(): void {
    if (!this.audio.playing) {
      this.audio.play();
    }
  }
}