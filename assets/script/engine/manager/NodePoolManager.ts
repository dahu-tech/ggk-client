import { instantiate, isValid, Node } from "cc";

/** 节点对象池管理器 */
export class NodePoolManager {
  public static readonly instance: NodePoolManager = new NodePoolManager();
  private _pools: Map<string, NodePool> = new Map();

  public create(name: string): NodePool {
    if (!this._pools.has(name)) {
      this._pools.set(name, new NodePool(name));
    }
    return this._pools.get(name);
  }

  public delete(name: string | NodePool) {
    if (typeof name == "string") {
      if (this._pools.has(name)) {
        let pool = this._pools.get(name);
        pool?.clear();
        this._pools.delete(name);
      }
    } else if (name && name instanceof NodePool) {
      this.delete(name.name);
    }
  }

  public get(name: string, isCreate: boolean = true): NodePool {
    if (this._pools.has(name)) {
      return this._pools.get(name);
    } else {
      if (isCreate) {
        return this.create(name);
      } else {
        return null;
      }
    }
  }
}

export class NodePool {
  public name: string;
  private _pool: Node[] = [];
  private _node: Node = null;
  public constructor(name: string) {
    this.name = name;
  }

  /** 用来克隆的节点 */
  public get cloneNode() {
    return this._node;
  }

  /** 设置的克隆对象, 会从父节点移除 */
  public set cloneNode(node: Node) {
    if (node && isValid(node)) {
      this._node = node;
      this._node.removeFromParent();
    }
  }

  public get size() {
    return this._pool.length;
  }
  public clear() {
    let count = this._pool.length;
    for (let i = 0; i < count; i++) {
      this._pool[i].destroy();
    }
    this._pool = [];
    if (this._node && isValid(this._node)) {
      this._node.destroy();
    }
    this._node = null;
  }
  public put(obj: Node) {
    if (obj && this._pool.indexOf(obj) === -1) {
      obj.removeFromParent();
      this._pool.push(obj);
    }
  }
  public get(): Node {
    if (this._pool.length <= 0) {
      if (this._node) {
        return instantiate(this._node);
      }
      return null;
    }
    let last = this._pool.length - 1;
    let obj = this._pool[last];
    this._pool.length = last;
    return obj;
  }
}