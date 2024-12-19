--
-- @lc app=leetcode id=181 lang=mysql
--
-- [181] Employees Earning More Than Their Managers
--

-- @lc code=start
# 매니저보다 많은 판매 수익을 달성한 직원을 찾아야 한다.
# Employee 테이블에서 매니저는 managerId가 null이다.
# 매니저와, 일반 직원의 판매 수익을 비교하여 찾는다.
SELECT B.name AS `Employee`
FROM Employee AS A
JOIN Employee AS B
ON A.id = B.managerId
WHERE A.salary < B.salary
-- @lc code=end

