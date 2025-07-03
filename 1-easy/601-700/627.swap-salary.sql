--
-- @lc app=leetcode id=627 lang=mysql
--
-- [627] Swap Salary
--

-- 모든 'f' 값을 'm'으로 변경하거나 그 반대로 변경해야 한다.
-- 단일 업데이트 문으로 작성해야 한다.

-- 8/8 cases passed (247 ms)
-- Your runtime beats 54.14 % of mysql submissions
-- Your memory usage beats 100 % of mysql submissions (0B)

-- @lc code=start
UPDATE Salary SET sex = IF(sex = 'm', 'f', 'm');

-- @lc code=end

