--
-- @lc app=leetcode id=586 lang=mysql
--
-- [586] Customer Placing the Largest Number of Orders
--

-- @lc code=start
# Write your MySQL query statement below
# customer_number의 최빈값(최대 빈도)을 찾아야한다.
SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1;
-- @lc code=end

