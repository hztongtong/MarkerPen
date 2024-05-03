'use strict';

export class Marker {
  uniqueID = '-MarkerPen-';
  textsKey = 'texts';
  relationsKey = 'relations';
  patternsKey = 'patterns';

  constructor() {
    // if (!Marker.instance) {
    this.texts = JSON.parse(localStorage.getItem(this.uniqueID + this.textsKey)) ?? {};
    this.relations = JSON.parse(localStorage.getItem(this.uniqueID + this.relationsKey)) ?? {};
    this.patterns = JSON.parse(localStorage.getItem(this.uniqueID + this.patternsKey)) ?? {};
    Marker.instance = this;
  }
  // return Marker.instance;
  // }

  // ディスポーズ（シングルトンインスタンスの廃棄）
  dispose() {
    // Marker.instance = null;
  }

  // 対象テキスト操作
  // 全件
  getTextsAll() {
    return this.texts;
  }
  // セット
  setTexts(update) {
    this.texts = { ...this.texts, ...update };
    localStorage.setItem(this.uniqueID + this.textsKey, JSON.stringify(this.texts));
  }
  // 削除
  removeTexts(remove) {
    remove.forEach((removeKey) => {
      delete this.texts[removeKey];
    });
    localStorage.setItem(this.uniqueID + this.textsKey, JSON.stringify(this.texts));
  }

  // リレーション操作
  // 全件
  getRelationsAll() {
    return this.relations;
  }
  // セット
  setRelations(update) {
    this.relations = { ...this.relations, ...update };
    localStorage.setItem(this.uniqueID + this.relationsKey, JSON.stringify(this.relations));
  }

  // マーキングパターン操作
  // 全件
  getPatternsAll() {
    return this.patterns;
  }
  // セット
  setPatterns(update) {
    this.patterns = { ...this.patterns, ...update };
    localStorage.setItem(this.uniqueID + this.patternsKey, JSON.stringify(this.patterns));
  }
}
