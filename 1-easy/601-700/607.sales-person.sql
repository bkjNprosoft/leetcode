--
-- @lc app=leetcode id=607 lang=mysql
--
-- [607] Sales Person
--

-- @lc code=start
# Write your MySQL query statement below
SELECT name
FROM SalesPerson
WHERE name NOT IN
  (
    SELECT s.name
    FROM SalesPerson s
    LEFT JOIN Orders o ON s.sales_id = o.sales_id
    LEFT JOIN Company c ON o.com_id = c.com_id
    WHERE c.name = 'RED'
  );
-- @lc code=end

