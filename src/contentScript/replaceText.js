"use strict";

/**
 * replaceText  指定されたDOMエレメントの文字列の全てを、<span data-marker clas="xxxx">～</span>で囲む
 * @param {element} DOM element   文字列置換するDOMエレメント
 * @param {string} string         ハイライトする文字列
 * @param {string} className      ハイライトのクラス名
 */
export const replaceText = (element, string, className) => {
  let text, newText;
  // 指定された要素のテキストを取得
  const originalText = element.innerHTML;
  // 文字列1を文字列2に置換
  // const REG_EXP = new RegExp(`(<span data-marker .*>${string}</span>)|>.*?(${string}).*?<|^.*?(${string}).*?$`, 'g');
  const REG_EXP = new RegExp(`(<span data-marker .*>${string}</span>)|${string}`, 'g');
  newText = originalText.replace(REG_EXP, `<span data-marker class="${className}">${string}</span >`);
  // 置換されたテキストを要素に設定
  if (newText !== originalText) {
    element.innerHTML = newText;
  }
}
