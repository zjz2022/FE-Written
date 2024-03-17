/**
 * 统计一个给定字符串中出现次数最多的字符及其出现的次数
 * @param str {string}
 * @return {any}
 * 你觉得有优化空间吗？时间复杂度是O(n)，应该没法优化了吧？
 *
 *
 * function getMostFrequentCharacter(str) {
 *  let char, count
 *    TODO:实现
 * console.log(`出现最多的字符是${char}，次数是${count}`);
 * }
 *
 * getMostFrequentCharacter('alksdkladjowpewklswlqsmlqwklejqlwelemlwsqm')
 *
 */
function getMostFrequentCharacter(str) {
  let char
  let count = -1
  const map = new Map()
  for (const s of str) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1)
    } else {
      map.set(s, 1)
    }
  }
  for (const [key, value] of map) {
    if (value > count) {
      count = value
      char = key
    }
  }
  console.log(map)
  console.log(`出现最多的字符是${char},次数为${count}`)
}

getMostFrequentCharacter('alksdkladjowpewklswlqsmlqwklejqlwelemlwsqm')
