/**
 * 大概的意思就是形似 `[1, 2, 3, 0, 0, 1, 2]` 这样的数字，`0` 是小孩子，其它是大人，大人往前排，小孩子往后排，排成 `[1, 2, 3, 1, 2, 0, 0]` 这样。难度不高，可以直接记忆化搜索。
 */

// 仅包含重点代码（复盘时再写的，可能有错）
function queue(nums) {
  // 一个就不排了
  if (nums.length <= 1) {
    return nums
  }
  let idxMemo = -1
  for (let i = 0; i < nums.length; i++) {
    if (idxMemo === -1 && nums[i] === 0) {
      idxMemo = i
    }
    if (idxMemo !== -1 && nums[i] !== 0) {
      nums[idxMemo] = nums[i]
      nums[i] = 0
      i = idxMemo
      idxMemo = -1
    }
  }
  return nums
}
