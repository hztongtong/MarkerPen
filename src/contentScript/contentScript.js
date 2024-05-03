"use strict";

import { Marker } from '../class/Marker';
import { buildMarkerPenStyle } from './buildMarkerPenStyle';
import { markText } from './markText';

// 既定値
const defaultTexts = {
};
const defaultRelations = {
  'positive': 'style-1',
  'negative': 'style-2'
};
const defaultMarkerpens = {
  'style-1': { highlightName: 'aqua', backgroundColor: '#00ffff' },
  'style-2': { highlightName: 'gray', backgroundColor: '#cccccc' },
};



// メイン処理
window.addEventListener('load', () => {
  console.debug('contentScript started');
  // マーカーペンデータインスタンスを作成する
  const marker = new Marker;

  // マーカーの既定値を設定する
  // marker.setTexts(defaultHighlightTexts);
  marker.setRelations(defaultRelations);
  marker.setPatterns(defaultMarkerpens);

  // マーカーstyleを挿入する
  const highlightStyle = buildMarkerPenStyle(marker.getPatternsAll());
  document.body.appendChild(highlightStyle);

  // マーキングする
  markText(marker.getTextsAll(), marker.getRelationsAll());


  // メッセージ受信を設定する
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const messageType = Object.keys(message)[0];
    switch (messageType) {
      // テキスト登録通知を受信した
      case 'addHighlightText':
        marker.setTexts(message.addHighlightText);
        markText(marker.getTextsAll(), marker.getRelationsAll());
        sendResponse({ status: "OK" });
        break;
      // テキスト削除通知を受信した
      case 'removeHighlightText':
        marker.removeTexts(message.removeHighlightText);
        markText(marker.getTextsAll(), marker.getRelationsAll());
        sendResponse({ status: "OK" });
        break;
      default:
        const responseMessage = 'BackgroundScriptがちょっと何言ってるか分からない';
        console.debug('responseMessage', message);
        sendResponse({ status: responseMessage });
    }
  });
});

