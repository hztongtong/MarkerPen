'use strict';

/**
 * コンテントスクリプトにマーキング対象テキストを通知する
 * @param {any} message 送信するメッセージ 
 */
const sendMessage2ContentScript = (message) => {
  chrome.tabs
    .query({                // 通信先タブを取得する
      active: true,           // アクティブウインドウ
      currentWindow: true     // カレントウインドウの中のタブ
    })
    .then((tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
        console.debug(response);
        if (response.status !== 'OK') { console.debug(response.status) };
      });
    });
}


/**
 * コンテキストメニューを追加する
 * @param {string} text 
 */
const appendContextMenu = (text) => {
  // コンテキストメニューをクリアする
  chrome.contextMenus.removeAll();
  // ポジティブ
  chrome.contextMenus.create({
    id: 'selectPositive',
    title: 'このテキストを positive に設定する',
    contexts: ['all']
  });
  // ネガティブ
  chrome.contextMenus.create({
    id: 'selectNegative',
    title: 'このテキストを negative に設定する',
    contexts: ['all']
  });
  // 削除
  chrome.contextMenus.create({
    id: 'selectRemove',
    title: 'このテキストを対象から削除する',
    contexts: ['all']
  });
}



// コンテキストメニューを追加する
appendContextMenu('');

// コンテキストメニュークリックのイベント処理を行う
chrome.contextMenus.onClicked.addListener((info, tab) => {
  let selectionText = info.selectionText;
  if (selectionText)
    switch (info.menuItemId) {
      // ポジティブが選択された
      case 'selectPositive':
        sendMessage2ContentScript({ addHighlightText: { [selectionText]: 'positive' } })
        break;
      // ネガティブが詮索された
      case 'selectNegative':
        sendMessage2ContentScript({ addHighlightText: { [selectionText]: 'negative' } })
        break;
      // 削除が詮索された
      case 'selectRemove':
        sendMessage2ContentScript({ removeHighlightText: [selectionText] });
        break;
    };
});
