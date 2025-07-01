--
-- @lc app=leetcode id=607 lang=mysql
--
-- [607] Sales Person
--

-- @lc code=start
# 시간 초과로 틀린 문제
# 외부 조인을 이용하여 Company name이 RED가 아닌 것들을 찾으면
# 해결될 줄 알았지만, 예상과는 다르게 원하는 결과가 나오지 않았다.

# 다른 사람의 풀이를 확인하고 분석해보았다.
# 서브 쿼리를 통해 오히려 RED인 사람의 이름을 가져와서 해당 값에 포함되지 않는
# 이름을 출력하는 방식이었다.

# 실패한 코드
-- SELECT s.name AS name
-- FROM SalesPerson s
-- LEFT JOIN Orders o ON s.sales_id = o.sales_id
-- LEFT JOIN Company c ON o.com_id = c.com_id
-- WHERE c.name != 'RED'

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

