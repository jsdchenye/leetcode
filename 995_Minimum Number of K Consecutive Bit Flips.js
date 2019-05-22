/*
In an array A containing only 0s and 1s, a K-bit flip consists of choosing a (contiguous) subarray of length K and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.

Return the minimum number of K-bit flips required so that there is no 0 in the array.  If it is not possible, return -1.

 

Example 1:

Input: A = [0,1,0], K = 1
Output: 2
Explanation: Flip A[0], then flip A[2].
Example 2:

Input: A = [1,1,0], K = 2
Output: -1
Explanation: No matter how we flip subarrays of size 2, we can't make the array become [1,1,1].
Example 3:

Input: A = [0,0,0,1,0,1,1,0], K = 3
Output: 3
Explanation:
Flip A[0],A[1],A[2]: A becomes [1,1,1,1,0,1,1,0]
Flip A[4],A[5],A[6]: A becomes [1,1,1,1,1,0,0,0]
Flip A[5],A[6],A[7]: A becomes [1,1,1,1,1,1,1,1]
 

Note:

1 <= A.length <= 30000
1 <= K <= A.length
*/
// 简单的思路，回报内存溢出
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// javascript
var minKBitFlips = function(A, K) {
  if (K === 1) return A.filter(item => item === 0).length;
  let sum = 0;
  const cal = function(arr, k) {
      const pos = arr.indexOf(0);
      if (pos < 0) return;
      if ((arr.slice(pos)).length < k) {
          sum = -1;
          return;
      };
      sum += 1;
      const content = arr.slice(pos, pos + k);
      const newPos = content.indexOf(0);
      const flipedArr = content.map(item => item === 0 ? 1 : 0).slice(newPos);
      const flipPos = flipedArr.indexOf(0);
      const newFlipedArr = flipPos < 0 ? [] : flipedArr.slice(flipPos);
      const newArr = [...arr];
      newArr.splice(0, k + pos);
      cal([...newFlipedArr, ...newArr], k);
  }
  cal(A, K);
  return sum;
};
// python 可借鉴
/*
class Solution {
  public:
    int minKBitFlips(vector<int>& A, int K) {
        int ans=0;
        for(int i=0;i<=A.size()-K;i++){
            if(A[i]==1)continue;
            ans++;
            for(int j=0;j<K;j++){
                A[i+j]^=1;
            }
            
        }
        for(int i=A.size()-K+1;i<A.size();i++)
            if(A[i]==0)return -1;
        return ans;
    }
};
*/
