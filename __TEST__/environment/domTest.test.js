'use strict';
// dom.test.js
const { domTest } = require('./domTest');


test('DOM要素のテキストが正しいか確認', () => {
  // テスト用の仮想DOMを作成
  const div = document.createElement('div');
  div.innerText = 'Hello, Jest';

  // テスト対象のDOM要素のテキストが期待通りか確認
  expect(domTest(div)).toBe('Hello, Jest');
});