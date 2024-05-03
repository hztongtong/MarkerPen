'use strict';

const { getElementsExceptStylesAndScripts } = require('../../src/contentScript/getElementsExceptStylesAndScripts');

// <div>単層
const node_div_element = '<div>テキスト1</div>';
const node_div_result = [['DIV', 'テキスト1']];
// <div>重層
const node_div2_element = `<div>テキスト1<div>テキスト2</div></div>`;
const node_div2_result = [['DIV', 'テキスト2']];
// <div>内<a>
const node_a_element = `<div>テキスト1<a>テキスト2</a></div>`;
const node_a_result = [['A', 'テキスト2']];
// <div>内<span>
const node_span_element = `<div>テキスト1<span>テキスト2</span></div>`;
const node_span_result = [['SPAN', 'テキスト2']];


describe('markText', () => {
  describe('単独', () => {
    test.each([
      ['<div>単層', node_div_element, node_div_result],
      ['<div>重層', node_div2_element, node_div2_result],
      ['<a>', node_a_element, node_a_result],
      ['<span>', node_span_element, node_span_result],
    ])('%s', (title, before, after) => {
      document.body.innerHTML = before;
      const beforeHTML = document.body.innnerHTML;
      const result = getElementsExceptStylesAndScripts(document.body);
      for (let i = 0; i < result.length; ++i) {
        expect(result[i].tagName).toBe(after[i][0]);
        expect(result[i].textContent).toBe(after[i][1]);
      }
    });
  });

});

