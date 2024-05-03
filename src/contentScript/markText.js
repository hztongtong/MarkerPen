'use strict';

import { getElementsExceptStylesAndScripts } from './getElementsExceptStylesAndScripts';
import { replaceText } from './replaceText';

/**
 * ハイライト処理する（「エリア」固定）
 * @param {object} texts マーカー対象文字列リスト
 * @param {0bject} relations マーカー名リスト
 */
export const markText = (texts, relations) => {
  if (texts) {
    // テキストノードを取得して順番に置換していく
    const nodes = getElementsExceptStylesAndScripts(document.body);
    nodes.forEach((node) => {
      for (const text in texts) {
        replaceText(node, text, relations[texts[text]]);
      };
    });
  }
}
