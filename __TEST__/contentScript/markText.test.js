'use strict';

const { markText } = require('../../src/contentScript/markText');

const texts = {
  'テキスト1': 'positive',
  'テキスト2': 'negative'
};
const relations = {
  'positive': 'style-1',
  'negative': 'style-2'
};

const node_div_before = '<div>あテキスト1い</div>';
const node_div_after = '<div>あ<span data-marker=\"\" class="style-1">テキスト1</span>い</div>';

const node_div2_before = `<div>あテキスト1い あテキスト2い</div>`;
const node_div2_after = `<div>あ<span data-marker=\"\" class="style-1">テキスト1</span>い あ<span data-marker=\"\" class="style-2">テキスト2</span>い</div>`;

const node_span2layer_before = `<div>あテキスト1い <span>あテキスト2い</span></div>`;
const node_span2layer_after = `<div>あテキスト1い <span>あ<span data-marker=\"\" class="style-2">テキスト2</span>い</span></div>`;

const node_a_before = `<div>あテキスト1い <a>あテキスト2い</a></div>`;
const node_a_after = `<div>あテキスト1い <a>あ<span data-marker=\"\" class="style-2">テキスト2</span>い</a></div>`;

const node_li_before = `<ul><li>あテキスト1い</li><li>あテキスト2い</li></ul>`;
const node_li_after = `<ul><li>あ<span data-marker=\"\" class="style-1">テキスト1</span>い</li><li>あ<span data-marker=\"\" class="style-2">テキスト2</span>い</li></ul>`;


describe('markText', () => {
  describe('単独', () => {
    test.each([
      ['<div>単数', node_div_before, node_div_after],
      ['<div>複数', node_div2_before, node_div2_after],
      ['<span>重層', node_span2layer_before, node_span2layer_after],
      ['<a>', node_a_before, node_a_after],
      ['<li>', node_li_before, node_li_after],
    ])('%s', (title, before, after) => {
      document.body.innerHTML = before;
      markText(texts, relations);
      expect(document.body.innerHTML).toBe(after);
    });
  });
});

