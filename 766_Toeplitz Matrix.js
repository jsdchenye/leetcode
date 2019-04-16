/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:

Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.

Note:

matrix will be a 2D array of integers.
matrix will have a number of rows and columns in range [1, 20].
matrix[i][j] will be integers in range [0, 99].

Follow up:

What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
What if the matrix is so large that you can only load up a partial row into the memory at once?
*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isLineEqual = function(target, i, j, rowNum, columnNum, matrix) {
  while( i++ < rowNum && j++ < columnNum) {
      if (!(matrix[i - 1][j - 1] === target)) {
          return false;
      }
  }
  return true;
}

var isToeplitzMatrix = function(matrix) {
  /* 前置判断条件*/
  // 判断是否为数组，如果为数组的话行数是否在 [1, 20]
  if (!Array.isArray(matrix) || matrix.length === 0 || matrix.length > 20) return false;
  const rowNum = matrix.length;
  // 判断数组的元素是否为数组，如果数组元素是数组的话，列数是否在[1, 20]
  if (matrix.some(ele => (!Array.isArray(ele) || ele.length === 0 || ele.length > 20))) return false;
  // 判断数组中的数组元素的长度是否一致
  const columnNum = matrix[0].length;
  if (matrix.some(ele => ele.length !== columnNum)) return false;
  // 判断数组的数组元素中元素是否都为整数，并且整数范围是否在[0, 99]
  const flatterArr = matrix.reduce((sum , item) => sum = [...sum, ...item], []);
  if (flatterArr.some(ele => !Number.isInteger(ele) || ele < 0 || ele > 99)) return false;
  
  if (matrix.length === 1) return true;
  // 从左下角开始
  const leftFlag = matrix.map(item => item[0]).every((ele, index) => {
      const pos = index + 1;
      return isLineEqual(ele, pos, 1, rowNum, columnNum, matrix);
  });

  // 左侧不满足条件
  if (!leftFlag) return false;
  
  const rightFlag = matrix[0].slice(1).every((ele, index) => {
      const pos = index + 2;
      return isLineEqual(ele, 1, pos, rowNum, columnNum, matrix);
  });
  if (!rightFlag) return false;
  return true;
};