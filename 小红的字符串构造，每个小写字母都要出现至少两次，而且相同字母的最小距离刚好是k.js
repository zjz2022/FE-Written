const fun = function (k) {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x']
  let pos = 0
  let str = ''
  while (pos < 26) {
    const temp = arr.slice(pos, pos + k).join('')
    str += temp + temp
    pos += k
  }
  console.log(str)
}

fun(1)
fun(2)
fun(3)
fun(4)
