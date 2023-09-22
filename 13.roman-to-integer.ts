/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romaNumberSymbols = { 
    IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900, 
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  let result: number = 0, index: number = -1, subStr: string = '';

  while (s.length > 0) {
    for (const key in romaNumberSymbols) {
      index = s.indexOf(key);
      if (index > -1) {
        subStr = s.substring(index, index + key.length);
        result += romaNumberSymbols[subStr];
        subStr && (s = s.replace(subStr, ''));
      }
    }
  }

  return result;
};
// @lc code=end

/**
 * base solution
 * https://leetcode.com/problems/roman-to-integer/solutions/326345/simple-javascript-solution-easy-understanding/
 * 현재 문자 보다 다음 인덱스의 문자가 크면 현재 문자의 숫자를 빼주고
 * 반대의 경우는 더해주는 정말 심플한 방식이다. 
 * 하지만, 속도는 나의 풀이가 더 빠르다.
 */

function _romanToInt(s: string): number {
  const symbols = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };

  let value = 0;
  for(let i = 0; i < s.length; i+=1){
      symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
  }
  return value
}