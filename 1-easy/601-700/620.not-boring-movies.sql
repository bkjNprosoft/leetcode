--
-- @lc app=leetcode id=620 lang=mysql
--
-- [620] Not Boring Movies
--

-- 홀수 번호 ID와 설명이 "boring"이 아닌 영화를 찾아서 반환해야 한다.
-- 순위별로 정렬된 결과 테이블을 내림차순으로 반환해야 한다.

-- 8/8 cases passed (226 ms)
-- Your runtime beats 84.38 % of mysql submissions
-- Your memory usage beats 100 % of mysql submissions (0B)

-- @lc code=start
SELECT id, movie, description, rating
FROM Cinema
WHERE description <> "boring" AND MOD(id, 2) = 1
ORDER BY rating DESC;
-- @lc code=end

