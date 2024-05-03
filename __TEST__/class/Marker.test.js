import { Marker } from '../../src/class/Marker';

const uniqueID = '-MarkerPen-';
const textsKey = 'texts';
const relationsKey = 'relations';
const patternsKey = 'patterns';


const testObjectOriginal = {
  'キー1': '値1',
  'キー2': '値2',
  'キー3': '値3',
};
const testObjectModify = {
  'キー1': '値1-1',
  'キー2': '値2-1',
  'キー3': '値3-1',
};
const testObjectAppend = {
  'キー1': '値1-2',
  'キー2': '値2-2',
};
const testObjectRemove = [
  'キー1',
  'キー2'
];
const testObjectRemoved = {
  'キー3': '値3',
};

describe('Marker', () => {
  beforeEach(() => {
    // テスト前にローカルストレージをクリアする
    localStorage.clear();
  });

  afterEach(() => {
    // テスト後にローカルストレージをクリアする
    localStorage.clear();
  });

  // describe('シングルトン動作', () => {
  //   test('正常動作', () => {
  //     const marker1 = new Marker;
  //     const marker2 = new Marker;
  //     expect(marker1 === marker2).toEqual(true);
  //     marker1.dispose();
  //     marker2.dispose();
  //   });
  // });


  // Texts
  describe('texts', () => {
    test('getTextsAll - データなし', () => {
      const marker = new Marker;
      expect(marker.getTextsAll()).toEqual({});
      marker.dispose();
    });

    test('getTextsAll - データあり', () => {
      localStorage.setItem(uniqueID + textsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      expect(marker.getTextsAll()).toEqual(testObjectOriginal);
      marker.dispose();
    });

    test('setTexts - データなし - 新規追加', () => {
      const marker = new Marker();
      marker.setTexts(testObjectOriginal);
      const result = JSON.parse(localStorage.getItem(uniqueID + textsKey, testObjectOriginal));
      expect(result).toEqual(testObjectOriginal);
      marker.dispose();
    });

    test('setTexts - データあり - 置換', () => {
      localStorage.setItem(uniqueID + textsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      marker.setTexts(testObjectModify);
      const result = JSON.parse(localStorage.getItem(uniqueID + textsKey));
      expect(result).toEqual(testObjectModify);
      marker.dispose();
    });

    test('setTexts - データあり - 追加', () => {
      localStorage.setItem(uniqueID + textsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      marker.setTexts(testObjectAppend);
      const result = JSON.parse(localStorage.getItem(uniqueID + textsKey));
      expect(result).toEqual({ ...testObjectOriginal, ...testObjectAppend });
      marker.dispose();
    });

    test('removeTexts', () => {
      localStorage.setItem(uniqueID + textsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      marker.removeTexts(testObjectRemove);
      const result = JSON.parse(localStorage.getItem(uniqueID + textsKey));
      expect(result).toEqual(testObjectRemoved);
      expect(marker.getTextsAll()).toEqual(testObjectRemoved);
      marker.dispose();
    });
  });


  // Relations
  describe('relations', () => {
    test('getRelationsAll - データなし', () => {
      const marker = new Marker;
      expect(marker.getRelationsAll()).toEqual({});
      marker.dispose();
    });

    test('getRelationsAll - データあり', () => {
      localStorage.setItem(uniqueID + relationsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      expect(marker.getRelationsAll()).toEqual(testObjectOriginal);
      marker.dispose();
    });

    test('setRelations - データなし', () => {
      const marker = new Marker();
      marker.setRelations(testObjectOriginal);
      const result = JSON.parse(localStorage.getItem(uniqueID + relationsKey));
      expect(result).toEqual(testObjectOriginal);
      marker.dispose();
    });

    test('setRelations - データあり - 置換', () => {
      localStorage.setItem(uniqueID + relationsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      marker.setRelations(testObjectModify);
      const result = JSON.parse(localStorage.getItem(uniqueID + relationsKey));
      expect(result).toEqual(testObjectModify);
      marker.dispose();
    });

    test('setRelations - データあり - 追加', () => {
      localStorage.setItem(uniqueID + relationsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      marker.setRelations(testObjectAppend);
      const result = JSON.parse(localStorage.getItem(uniqueID + relationsKey));
      expect(result).toEqual({ ...testObjectOriginal, ...testObjectAppend });
      marker.dispose();
    });
  });


  // Patterns
  describe('patterns', () => {
    test('getPatternsAll - データなし', () => {
      const marker = new Marker;
      expect(marker.getPatternsAll()).toEqual({});
      marker.dispose();
    });

    test('getPatternsAll - データあり', () => {
      localStorage.setItem(uniqueID + patternsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      expect(marker.getPatternsAll()).toEqual(testObjectOriginal);
      marker.dispose();
    });

    test('setPatterns - データなし', () => {
      const marker = new Marker();
      marker.setPatterns(testObjectOriginal);
      const result = JSON.parse(localStorage.getItem(uniqueID + patternsKey));
      expect(result).toEqual(testObjectOriginal);
      marker.dispose();
    });

    test('setPatterns - データあり - 置換', () => {
      localStorage.setItem(uniqueID + patternsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      marker.setPatterns(testObjectModify);
      const result = JSON.parse(localStorage.getItem(uniqueID + patternsKey));
      expect(result).toEqual(testObjectModify);
      marker.dispose();
    });

    test('setPatterns - データあり - 追加', () => {
      localStorage.setItem(uniqueID + patternsKey, JSON.stringify(testObjectOriginal));
      const marker = new Marker();
      marker.setPatterns(testObjectAppend);
      const result = JSON.parse(localStorage.getItem(uniqueID + patternsKey));
      expect(result).toEqual({ ...testObjectOriginal, ...testObjectAppend });
      marker.dispose();
    });
  });

});
