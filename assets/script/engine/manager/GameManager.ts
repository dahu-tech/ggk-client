import { Component, director, Node } from "cc";
import xx from "@xxyy/app";

export class GameManager extends Component {
  public static instance: GameManager = null;
  onLoad() {
    if (GameManager.instance == null) {
      GameManager.instance = this;
    } else {
      this.destroy();
      return;
    }
  }

  public rootNode: Node = null;
  public uiPrefabsAbName: string = "uiPrefabs";
  public languagesAbName: string = "languages";

  public async startGame(rootNode: Node, events: xx.IAppEvents) {
    this.rootNode = rootNode;
    director.addPersistRootNode(this.rootNode); //常驻根节点
    await xx.app.init(events);
    // resMgr => uiMgr
  }
}