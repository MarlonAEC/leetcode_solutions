/*
 * @lc app=leetcode id=845 lang=typescript
 *
 * [845] Longest Mountain in Array
 */

// @lc code=start
function longestMountain(arr: number[]): number {
  if (arr.length < 3) return 0;

  let sol = 0;
  let flag: boolean = false;
  let lengthGoingUp = 1;
  let lengthGoingDown = 0;

  let currentSol = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && !flag) {
      currentSol++;
      lengthGoingUp++;
    } else if (arr[i] > arr[i - 1] && flag) {
      if (currentSol > sol && lengthGoingUp > 0) {
        sol = currentSol;
      }
      currentSol = 2;
      lengthGoingUp = 2;
      lengthGoingDown = 0;
      flag = false;
    } else if (arr[i] < arr[i - 1] && !flag) {
      if (i > 1 && lengthGoingUp > 1) {
        currentSol++;
        lengthGoingDown++;
        flag = true;
      }
    } else if (arr[i] < arr[i - 1] && flag) {
      currentSol++;
      flag = true;
    } else {
      if (currentSol > sol && lengthGoingUp > 1 && lengthGoingDown >= 1) {
        sol = currentSol;
      }
      currentSol = 1;
      lengthGoingUp = 1;
      lengthGoingDown = 0;
    }
  }
  if (currentSol > sol && lengthGoingDown >= 1 && lengthGoingUp > 1)
    sol = currentSol;
  return sol < 3 ? 0 : sol;
}
// @lc code=end
