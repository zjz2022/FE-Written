// 定义快速排序函数
const quickSort = (arr, l, r) => {
  if (l >= r) return // 如果左边索引大于等于右边索引，表示已经整理完成
  let x = arr[l],
    i = l - 1, // 因为我是 do i ++ do j -- 先自增，后比较，所以索引值要比数组边界大
    j = r + 1 // 定义基准值x，以及左右索引i、j
  while (i < j) {
    // 当i小于j时循环
    do {
      i++ // 先自增，再比较
    } while (arr[i] < x) // 从左向右找第一个大于等于x的数
    do {
      j-- // 先自减，再比较
    } while (arr[j] > x) // 从右向左找第一个小于等于x的数
    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]] // 交换元素位置
    }
  }
  // 继续处理左右两部分
  quickSort(arr, l, j)
  quickSort(arr, j + 1, r)
}

// 测试用例
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 52, 3, 5]
quickSort(arr, 0, arr.length - 1)
console.log(arr) // 输出排序后的数组
