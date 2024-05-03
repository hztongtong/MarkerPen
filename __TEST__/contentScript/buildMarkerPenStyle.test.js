'use strict';

import { buildMarkerPenStyle } from '../../src/contentScript/buildMarkerPenStyle';

const uniqueID = '-MarkerPen-';
const textsKey = 'texts';
const relationsKey = 'relations';
const patternsKey = 'patterns';

const testPatterns = {
  'style-1': { highlightName: 'aqua', backgroundColor: '#00ffff' },
  'style-2': { highlightName: 'gray', backgroundColor: '#cccccc' },
}

// HTMLマッチング用
const RegEx = /  |\r\n|\n|\r/g;

const expected = `
.style-1{
  background-color: #00ffff;
}

.style-2{
  background-color: #cccccc;
}
`;

describe('buildMarkerPenStyle', () => {
  describe('単独', () => {
    test.each([
      ['シンプル', testPatterns, expected],
    ])('%s', (title, pallets, expected) => {
      localStorage.setItem(uniqueID + patternsKey, JSON.stringify(testPatterns));
      expect(buildMarkerPenStyle(testPatterns).innerHTML.replace(RegEx, '')).toBe(expected.replace(RegEx, ''));
    });
  });

});
