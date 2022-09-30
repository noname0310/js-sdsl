import { Vector, Deque, SequentialContainer } from '@/index';
import { expect } from 'chai';

const arr: number[] = [];
const testNum = 10000;
for (let i = 0; i < testNum; ++i) {
  arr.push(Math.floor(Math.random() * testNum));
}

function judgeSequentialContainer(
  container: SequentialContainer<number>,
  myVector: SequentialContainer<number>
) {
  expect(container.size()).to.equal(myVector.size());
  container.forEach((element, index) => {
    expect(element).to.equal(myVector.getElementByPos(index));
  });
}

describe('Deque test', () => {
  const myDeque = new Deque(arr);
  const tmpArr = [...arr];

  it('Deque pushFront function test', () => {
    for (let i = 0; i < testNum; ++i) {
      myDeque.pushFront(i);
      tmpArr.unshift(i);
    }
    judgeSequentialContainer(myDeque, new Vector(tmpArr));
  });

  it('Deque popFront function test', () => {
    for (let i = 0; i < testNum; ++i) {
      myDeque.popFront();
      tmpArr.shift();
    }
    judgeSequentialContainer(myDeque, new Vector(tmpArr));
  });

  it('Deque shrinkToFit function test', () => {
    myDeque.shrinkToFit();
    judgeSequentialContainer(myDeque, new Vector(tmpArr));
  });

  it('Deque find function test', () => {
    for (let i = 0; i <= 1000; ++i) {
      const index = Math.floor(Math.random() * myDeque.size());
      expect(myDeque.find(tmpArr[index]).pointer).to.equal(tmpArr[index]);
    }
    expect(myDeque.find(tmpArr[tmpArr.length - 1]).pointer).to.equal(tmpArr[tmpArr.length - 1]);
    expect(myDeque.find(tmpArr[tmpArr.length / 2]).pointer).to.equal(tmpArr[tmpArr.length / 2]);
    expect(() => {
      const a = myDeque.find(-1).pointer;
      return a;
    }).to.to.throw(RangeError);
    myDeque.pushBack(-1);
    expect(myDeque.find(-1).pointer).to.equal(-1);
    myDeque.popBack();
  });

  it('Deque eraseElementByIterator function test', () => {
    for (let i = 0; i < testNum / 10; ++i) {
      myDeque.eraseElementByIterator(myDeque.begin());
      tmpArr.shift();
    }
    judgeSequentialContainer(myDeque, new Vector(tmpArr));
    let index = 0;
    for (const element of myDeque) {
      expect(element).to.equal(tmpArr[index++]);
    }
  });

  it('Deque run time error test', () => {
    expect(() => myDeque.getElementByPos(myDeque.size())).to.to.throw(RangeError);
  });

  it('Deque empty test', () => {
    myDeque.clear();
    for (let i = 0; i < (1 << 15); ++i) {
      myDeque.pushBack(i);
    }
    while (!myDeque.empty()) {
      myDeque.popBack();
    }
    expect(myDeque.front()).to.equal(undefined);
    expect(myDeque.size()).to.equal(0);
    myDeque.shrinkToFit();
    myDeque.pushBack(1);
    expect(myDeque.find(1).pointer).to.equal(1);
    myDeque.begin().pointer = 2;
    expect(myDeque.front()).to.equal(2);
    expect(new Deque(new Set([2])).size()).to.equal(1);
    expect(new Deque(new Vector([2])).size()).to.equal(1);
    // @ts-ignore
    expect(() => new Deque({})).to.to.throw(RangeError);
    myDeque.cut(-1);
    myDeque.popBack();
    myDeque.popFront();
    expect(myDeque.size()).to.equal(0);
    expect(() => myDeque.eraseElementByPos(-1)).to.to.throw(RangeError);
    myDeque.eraseElementByValue(0);
    expect(myDeque.find(0).equals(myDeque.end())).to.equal(true);
    myDeque.unique();
    // eslint-disable-next-line no-empty, no-unused-vars, @typescript-eslint/no-unused-vars
    for (const element of myDeque) {}
    myDeque.pushBack(1);
    myDeque.insert(1, 1);
    expect(myDeque.back()).to.equal(1);
    for (const element of myDeque) {
      expect(element).to.equal(1);
    }
    myDeque.eraseElementByPos(1);
    myDeque.insert(0, 3);
    expect(myDeque.front()).to.equal(3);

    const q = new Deque<number>([], (1 << 10));
    for (let i = 0; i < testNum; ++i) q.pushFront(arr[i]);
    arr.reverse();
    judgeSequentialContainer(q, new Vector(arr));
  });
});