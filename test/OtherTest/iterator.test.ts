import {
  Vector,
  LinkList,
  Deque,
  OrderedSet,
  OrderedMap,
  VectorIterator,
  LinkListIterator,
  DequeIterator,
  OrderedSetIterator,
  OrderedMapIterator
} from '@/index';
import { ContainerIterator } from '@/container/ContainerBase';

let arr: number[] = [];
const testNum = 10000;
for (let i = 0; i < testNum; ++i) {
  arr.push(Math.floor(Math.random() * testNum));
}
arr = Array.from(new Set(arr));
arr.sort((x, y) => x - y);

const containerArr = [
  new Vector(arr),
  new LinkList(arr),
  new Deque(arr),
  new OrderedSet(arr),
  new OrderedMap(arr.map((element, index) => [index, element]))
];

describe('iterator test', () => {
  test('normal iterator next function test', () => {
    for (const container of containerArr) {
      let index = 0;
      for (let it = container.begin() as ContainerIterator<unknown>;
        !it.equals(container.end() as ContainerIterator<unknown>);
        it = it.next()) {
        if (container instanceof OrderedMap) {
          expect((it as ContainerIterator<[number, number]>).pointer[1])
            .toEqual(arr[index++]);
        } else {
          expect(it.pointer).toEqual(arr[index++]);
        }
      }
    }
  });

  test('normal iterator pre function test', () => {
    for (const container of containerArr) {
      let index = arr.length - 1;
      for (let it = container.end().pre() as ContainerIterator<unknown>;
        !it.equals(container.begin() as ContainerIterator<unknown>);
        it = it.pre()) {
        if (container instanceof OrderedMap) {
          expect((it as ContainerIterator<[number, number]>).pointer[1])
            .toEqual(arr[index--]);
        } else {
          expect(it.pointer).toEqual(arr[index--]);
        }
      }
    }
  });

  test('reverse iterator next function test', () => {
    for (const container of containerArr) {
      let index = arr.length - 1;
      for (let it = container.rBegin() as ContainerIterator<unknown>;
        !it.equals(container.end());
        it = it.next()) {
        if (container instanceof OrderedMap) {
          expect((it as ContainerIterator<[number, number]>).pointer[1])
            .toEqual(arr[index--]);
        } else {
          expect(it.pointer).toEqual(arr[index--]);
        }
      }
    }
  });

  test('reverse iterator pre function test', () => {
    for (const container of containerArr) {
      let index = 0;
      for (let it = container.end().pre() as ContainerIterator<unknown>;
        !it.equals(container.rBegin() as ContainerIterator<unknown>);
        it = it.pre()) {
        if (container instanceof OrderedMap) {
          expect((it as ContainerIterator<[number, number]>).pointer[1])
            .toEqual(arr[index++]);
        } else {
          expect(it.pointer).toEqual(arr[index++]);
        }
      }
    }
  });

  for (const container of containerArr) {
    test('normal iterator next run time error test', () => {
      expect(() => container.end().next()).toThrowError(RangeError);
    });

    test('normal iterator pre run time error test', () => {
      expect(() => container.begin().pre()).toThrowError(RangeError);
    });
  }

  test('export test', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new VectorIterator<number>(0,
        function () {
          return 0;
        }, function () {
          return 0;
        }, function () {
          return 0;
        });
      // @ts-ignore
      // eslint-disable-next-line no-new
      new LinkListIterator<number>(containerArr[0].begin().node);
      // eslint-disable-next-line no-new
      new DequeIterator<number>(0,
        function () {
          return 0;
        }, function () {
          return 0;
        }, function () {
          return 0;
        });
      // @ts-ignore
      // eslint-disable-next-line no-new
      new OrderedSetIterator<number>(containerArr[3].begin().node, containerArr[3].header);
      // @ts-ignore
      // eslint-disable-next-line no-new
      new OrderedMapIterator<number, number>(containerArr[4].begin().node, containerArr[4].header);
    }).not.toThrowError(Error);
  });
});
