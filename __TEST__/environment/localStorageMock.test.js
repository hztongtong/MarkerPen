'use strict';

describe('localStorageモック', () => {
  test('setItem/getItem', () => {
    const key = '1234567890120';
    const value = [{ index: 1, value: '123456789012' }];
    localStorage.setItem(key, JSON.stringify(value));
    const result = localStorage.getItem(key);
    expect(JSON.parse(result)).toEqual(value);
  });

  test('length', () => {
    const key1 = '1234567890120';
    const key2 = '1234567890121';
    const key3 = '1234567890122';
    const value = [{ index: 1, value: '123456789012' }];
    localStorage.setItem(key1, JSON.stringify(value));
    expect(localStorage.length).toBe(1);
    localStorage.setItem(key2, JSON.stringify(value));
    expect(localStorage.length).toBe(2);
    localStorage.setItem(key3, JSON.stringify(value));
    expect(localStorage.length).toBe(3);
  });

  test('key', () => {
    const key0 = '1234567890120';
    const key1 = '1234567890121';
    const key2 = '1234567890122';
    const value = [{ index: 1, value: 'xxxxxxxxxx' }];
    localStorage.setItem(key0, JSON.stringify(value));
    localStorage.setItem(key1, JSON.stringify(value));
    localStorage.setItem(key2, JSON.stringify(value));
    expect(localStorage.key(0)).toBe(key0);
    expect(localStorage.key(1)).toBe(key1);
    expect(localStorage.key(2)).toBe(key2);
  });
});
