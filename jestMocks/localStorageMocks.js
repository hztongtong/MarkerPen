
/**
 * localStorageモック
 */
var localStorageMock = (() => {
  var store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value;
    },
    removeItem: function (key) {
      // delete store[key];
      store[key] = null;
    },
    clear: function () {
      store = {};
    },
    key: function (n) {
      return Object.keys(store)[n] || null;
    },
    get length() {
      return Object.keys(store).length;
    },
  };

})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

