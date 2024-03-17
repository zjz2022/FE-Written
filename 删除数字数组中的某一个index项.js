//删除数字数组中的某一个index项
const _delete = (array, index) => {
  // 补全代码
  array.splice(index, 1, '.')
  let res = array.join('').replace(/\./g, '').split('')
  res.forEach((item, index, arr) => {
    arr[index] = Number(item)
  })
  return res
}
console.log(_delete([1, 2, 3], 1))
