"use strict";

import { Marker } from '../class/Marker';

// CSSプロパティ名対応表
const propertyNameList = {
  backgroundColor: 'background-color'
}


/**
 * マーカーペンの<style>要素を組み立てる
 * @returns {string} CSS定義
 */
export const buildMarkerPenStyle = (patterns) => {
  let styles = '';
  if (patterns) {
    for (const [className, style] of Object.entries(patterns)) {
      styles += `.${className}{`;
      for (const [propertyName, value] of Object.entries(style)) {
        styles += propertyNameList[propertyName] ? `${propertyNameList[propertyName]}: ${value};` : '';
      }
      styles += '}';
    }
  }
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  return styleElement;
}
