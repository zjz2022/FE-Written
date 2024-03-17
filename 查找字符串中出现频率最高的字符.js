/**
 * 查找字符串中出现频率最高的字符，若存在多个按字符串中出现顺序排列输出
 */

/*
要查找字符串中出现频率最高的字符，我们可以按照以下步骤进行：

思路
遍历字符串，统计每个字符的出现次数：使用一个哈希表（在JavaScript中是一个对象Object或Map）来存储每个字符及其出现的次数。
找到出现次数最多的字符：遍历哈希表，找到具有最高出现次数的字符。
代码实现
这里给出两种实现方式，一种使用普通对象Object，另一种使用Map。
*/

// 使用对象Object
function findMostFrequentChar(str) {
  const charCount = {}
  let maxCount = 0
  let mostFrequentChar = ''

  // 统计每个字符的出现次数
  for (const char of str) {
    if (!charCount[char]) {
      charCount[char] = 1
    } else {
      charCount[char]++
    }

    // 更新最频繁出现的字符
    if (charCount[char] > maxCount) {
      maxCount = charCount[char]
      mostFrequentChar = char
    }
  }

  return mostFrequentChar
}

// 使用map
// 定义一个函数，输入参数是一个字符串，输出是字符串中出现最频繁的字符
function findMostFrequentCharWithMap(str) {
  const charMap = new Map() // 创建一个新的Map对象，用于存储每个字符及其出现的次数
  let maxCount = 0 // 定义一个变量maxCount，用于记录出现次数最多的字符的次数
  let mostFrequentChar = '' // 定义一个变量mostFrequentChar，用于记录出现次数最多的字符

  // 使用for...of循环遍历字符串中的每一个字符
  for (const char of str) {
    // 获取当前字符的出现次数，若Map中不存在则默认为0，然后将出现次数加1
    const count = (charMap.get(char) || 0) + 1
    charMap.set(char, count) // 将当前字符及其出现次数存储到Map中

    // 检查当前字符的出现次数是否大于maxCount
    if (count > maxCount) {
      maxCount = count // 如果大于maxCount，则更新maxCount
      mostFrequentChar = char // 同时更新mostFrequentChar
    }
  }

  // 返回出现次数最多的字符
  return mostFrequentChar
}

/*
复杂度分析
对于上述两种方法：

时间复杂度：O(n)，其中n是输入字符串的长度。我们需要遍历整个字符串一次来统计每个字符的出现次数，并且在同一次遍历中就可以更新和记录出现次数最多的字符，因此总的时间复杂度是线性的。

空间复杂度：O(k)，其中k是字符串中不同字符的数量。在最坏的情况下，如果字符串中每个字符都不同，则k可以接近n，但对于大多数自然语言文本和编程语言代码，k远小于n。使用对象或Map来存储每个字符的计数，空间复杂度取决于字符串中不同字符的数量。

总结
上述方法提供了查找字符串中出现频率最高的字符的有效途径，具有良好的时间和空间效率。在大多数情况下，这种方法的性能已经足够好，考虑到JavaScript引擎的优化，实际运行效率可能比理论分析更佳。选择使用对象还是Map取决于具体需求和个人偏好，两者在这种场景下的性能差异不大。
 */
