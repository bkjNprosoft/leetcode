--
-- @lc app=leetcode id=619 lang=mysql
--
-- [619] Biggest Single Number
--

-- 중복되지 않은 숫자를 찾아서 그 중 가장 큰 수를 반환해야 한다.
-- 만약, 반환해야 할 숫자가 없으면 null을 반환해야 한다.
-- null을 반환하는 데에서 막혀서 풀이에 실패하였다.

-- SELECT IFNULL(num, null) as num
-- FROM MyNumbers
-- GROUP BY num
-- HAVING COUNT(*) < 2
-- ORDER BY num DESC
-- LIMIT 1;

-- @lc code=start

-- 다른 사람의 풀이, 서브쿼리를 이용하면 찾는 값이 없으면 null을 반환하는 것을 배웠다.
-- 18/18 cases passed (389 ms)
-- Your runtime beats 89.89 % of mysql submissions
-- Your memory usage beats 100 % of mysql submissions (0B)

SELECT MAX(num) AS num
FROM (
  SELECT num
  FROM MyNumbers
  GROUP BY num
  HAVING COUNT(num) = 1
) AS unique_numbers;

-- @lc code=end



