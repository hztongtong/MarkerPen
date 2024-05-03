'use strict';

export const getElementsExceptStylesAndScripts = (targetElement) => {
  const elements = targetElement.querySelectorAll('*');
  const filteredElements = [];

  for (const element of elements) {
    if (element.tagName !== 'STYLE' && element.tagName !== 'SCRIPT' && element.children.length === 0) {
      filteredElements.push(element);
    }
  }
  return filteredElements;
}