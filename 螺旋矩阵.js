// 螺旋矩阵
const arr = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]

function yaLi(arr) {
  let l = 0
  let lMin = 0
  let lMax = arr.length
  let r = 0
  let rMin = 0
  let rMax = arr[0].length
  let len = arr.flat().length
  let res = []
  while (res.length < len) {
    if (l == lMax && r == rMax) {
      lMin++
      rMin++
      for (let l = lMax; l >= lMin; i--) {
        if (l == lMin) {
          for (let r = rMax; r >= rMin; r--) {
            if (r == rMin) {
              res.push(arr[l][r])
            }
          }
        }
      }
    } else if (l == lMin && r == rMin) {
      console.log(res, l)
      for (let r = rMin; r < rMax; r++) {
        res.push(arr[l][r])
        if (r == rMax) {
          for (let l = rMin; l <= rMax; l++) {
            if (l == rMax && r !== rMax) {
              res.push(arr[l][r])
            }
          }
        }
      }
    }
  }
  return r
}
console.log(yaLi(arr))
