//加入千分符号

function _comma(number) {
  let abs = Math.abs(number)
  let str = abs + ''
  let res = []
  let flag = 0

  for (let l = str.length; i >= 0; i--) {
    res.push(str[i])
    if (flag !== 0 && flag % 3 == 0) {
      res.push(',')
    }
    flag++
  }
  res = res.reverse().join('')[0] !== ',' ? res.join('') : res.join('').slice(1)
  return number < 0 ? '-' + res : res
}
console.log(_comma(-123))
