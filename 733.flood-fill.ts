/*
 * @lc app=leetcode id=733 lang=typescript
 *
 * [733] Flood Fill
 */

// @lc code=start
interface Par {
  row: number;
  col: number;
}

class MyQueue<Type> {
  elements: Array<Type>;

  constructor() {
    this.elements = [];
  }

  /**
   * Return the first element of the queue.
   * @returns The first element in the queue.
   */
  front() {
    return this.elements[0];
  }

  /**
   * The push function adds a value to the end of the queue.
   * @param {Type} value - Type
   */
  push(value: Type): void {
    this.elements.push(value);
  }

  /**
   * If the queue is empty, throw an error, otherwise delete the first element in the queue
   */
  pop(): void | never {
    if (this.isEmpty()) {
      throw new Error("The queue is empty there is nothing to pop.");
    }
    this.elements.shift();
  }

  /**
   * If the length of the elements array is equal to zero, return true, otherwise return false
   * @returns A boolean value.
   */
  isEmpty(): boolean {
    if (this.elements.length === 0) return true;
    return false;
  }
}

const row = [0, -1, 0, 1];
const colum = [-1, 0, 1, 0];
let mSize = -1;
let nSize = -1;

const isInsideMatrix = (x, y) => {
  if (x < 0 || x >= mSize) return false;
  if (y < 0 || y >= nSize) return false;
  return true;
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const originalValue = image[sr][sc];
  mSize = image.length;
  nSize = image[0].length;
  let marked = new Array(50); // create an empty array of length n
  for (var i = 0; i < 50; i++) {
    marked[i] = new Array(50); // make each element an array
  }
  marked[sr][sc] = true;

  let sol: number[][] = [...image];
  sol[sr][sc] = newColor;
  let valueToAdd = image[sr][sc];
  let Q = new MyQueue<Par>();

  Q.push({
    row: sr,
    col: sc,
  });

  while (!Q.isEmpty()) {
    let x: Par = Q.front();
    Q.pop();
    //console.log(x);
    for (let i = 0; i < 4; i++) {
      if (
        isInsideMatrix(x.row + row[i], x.col + colum[i]) &&
        image[x.row + row[i]][x.col + colum[i]] === originalValue &&
        !marked[x.row + row[i]][x.col + colum[i]]
      ) {
        //console.log("ADDING: ", x.row + row[i], x.col + colum[i])
        Q.push({
          row: x.row + row[i],
          col: x.col + colum[i],
        });
        sol[x.row + row[i]][x.col + colum[i]] = newColor;
        marked[x.row + row[i]][x.col + colum[i]] = true;
      }
    }
  }

  //console.log(sol);

  return sol;
};

// @lc code=end
