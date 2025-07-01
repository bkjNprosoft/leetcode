--
-- @lc app=leetcode id=610 lang=mysql
--
-- [610] Triangle Judgement
--

-- @lc code=start
# x, y, z 선분의 길이를 이용하여 삼각형을 형성할 수 있는지 여부를 판단하는 문제이다.
# 삼각형 부등식은 삼각형의 어떤 두 변의 길이의 합도 나머지 한변의 길이보다 커야 한다.
# x + y > z && y + z > x && x + z > y

SELECT *, IF(x+y > z AND y+z > x AND x+z > y, 'Yes', 'No') AS triangle
FROM Triangle;

-- @lc code=end

