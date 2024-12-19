--
-- @lc app=leetcode id=175 lang=mysql
--
-- [175] Combine Two Tables
--

-- @lc code=start
# personId를 기준으로 outer join을 사용하여
# 일치하지 않는 레코드의 값은 null으로 채워진다.
SELECT firstName, lastName, city, state
FROM Person AS A
LEFT JOIN Address AS B
ON A.personId = B.personId
-- @lc code=end

