/*
In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.  These characters divide the square into contiguous regions.

(Note that backslash characters are escaped, so a \ is represented as "\\".)

Return the number of regions.

 

Example 1:

Input:
[
  " /",
  "/ "
]
Output: 2
Explanation: The 2x2 grid is as follows:

Example 2:

Input:
[
  " /",
  "  "
]
Output: 1
Explanation: The 2x2 grid is as follows:

Example 3:

Input:
[
  "\\/",
  "/\\"
]
Output: 4
Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
The 2x2 grid is as follows:

Example 4:

Input:
[
  "/\\",
  "\\/"
]
Output: 5
Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
The 2x2 grid is as follows:

Example 5:

Input:
[
  "//",
  "/ "
]
Output: 3
Explanation: The 2x2 grid is as follows:

 

Note:

1 <= grid.length == grid[0].length <= 30
grid[i][j] is either '/', '\', or ' '.
*/

/**
 * @param {string[]} grid
 * @return {number}
 */
var isTopLine = function(x, y, len, grid) {
  while (x !== 0 && x !== len - 1 && y !== 0 && y !== len -1) {
      if (grid[x][y] === '') return 0; // 如果某块是空白，那么这块就不会分割
      if (grid[x][y] === '/') {
          if (!grid[x][yc  - 1]) return 1;
          if (grid[x][y - 1] === '/') {
              return isTopLine(x, y - 1, len, grid)
          }
      } 
  }
  
}

var regionsBySlashes = function(grid) {
   let sum = 0;
  let posX = 0, posY = 1; // 从
  const len = grid.length;
  grid.forEach((item, index) => {
      grid[index] = item.split('');
  });
  // 只要没有回到原点
  while(posX !== 0 || posY !== 0) {
      
  }
};