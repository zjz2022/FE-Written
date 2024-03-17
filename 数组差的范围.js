/**
 * 数组内是否存在 | nums[ i ] - nums[ j ] | ≤ t ，且 | i - j | ≤ k
 */

// 大概思路
function avail(a, b, target) {
  return Math.abs(a - b) <= target
}

function isExist(nums, t, k) {
  if (nums.length <= 1) {
    return false
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - i; j++) {
      if (avail(nums[i], nums[j], t) && avail(i, j, k)) {
        return true
      }
    }
  }
  return false
}
