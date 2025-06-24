--
-- @lc app=leetcode id=577 lang=mysql
--
-- [577] Employee Bonus
--

-- @lc code=start
# Write your MySQL query statement below
SELECT name, bonus
FROM Employee as A
LEFT JOIN Bonus as B
ON A.empId = B.empId
WHERE B.bonus < 1000 OR B.bonus IS NULL;
-- @lc code=end

