const before_data = {
  applicant: 'dev',
  nickname: 'dev_nick',
  approvers: [
    {
      approvalData: 1717,
      type: 's',
      staffCode: '500001',
      nickname: '500001_nick',
    },
    {
      approvalData: 2222,
      type: 'g',
      staffCode: 'game',
      nickname: '게임',
    }
  ],
  obj: {
    key: 'test',
  },
  roro: 'roro',
};

const after_data = {
  applicant: 'admin',
  nickname: 'admin_nick',
  approvers: [
    {
      approvalData: 9949,
      type: 't',
      staffCode: 'james',
      nickname: '제임스',
    },
    {
      approvalData: 1717,
      type: 's',
      staffCode: '500001',
      nickname: '500001_nick',
    },
  ],
  obj: {
    key: 'test2',
  },
  haha: 'happy',
};

/**
 * Before Object, After Object
 * 변하는 값을 비교하여 표시하기 위한 함수
 */
function getDeepDiff(before, after) {
  function diffArrays(beforeArr, afterArr) {
    const result = [];

    // 기준: after 기준으로 나열
    for (let i = 0; i < afterArr.length; i++) {
      const afterItem = afterArr[i];

      // 동일한 항목이 before 배열에 존재하는지 탐색
      const matchedIndex = beforeArr.findIndex(
        (b) => JSON.stringify(b) === JSON.stringify(afterItem)
      );

      if (matchedIndex === -1) {
        result.push(`added: ${JSON.stringify(afterItem, null, 2)}`);
      } else if (matchedIndex !== i) {
        result.push(`moved: ${JSON.stringify(afterItem, null, 2)}`);
      } else {
        const itemDiff = getDeepDiff(beforeArr[i], afterItem);
        result.push(Object.keys(itemDiff).length > 0 ? itemDiff : undefined);
      }
    }

    // 삭제된 항목 탐지
    for (const beforeItem of beforeArr) {
      const found = afterArr.some(
        (a) => JSON.stringify(a) === JSON.stringify(beforeItem)
      );
      if (!found) {
        result.push(`deleted: ${JSON.stringify(beforeItem, null, 2)}`);
      }
    }

    return result.filter(Boolean);
  }

  if (Array.isArray(before) && Array.isArray(after)) {
    return diffArrays(before, after);
  }

  if (
    typeof before === 'object' &&
    before !== null &&
    typeof after === 'object' &&
    after !== null
  ) {
    const result = {};
    const keys = new Set([...Object.keys(before), ...Object.keys(after)]);

    for (const key of keys) {
      const beforeVal = before[key];
      const afterVal = after[key];

      if (!(key in before)) {
        result[key] = `added: ${afterVal}`;
      } else if (!(key in after)) {
        result[key] = `deleted: ${beforeVal}`;
      } else if (
        typeof beforeVal === 'object' &&
        typeof afterVal === 'object'
      ) {
        const nested = getDeepDiff(beforeVal, afterVal);
        if (Object.keys(nested).length > 0) {
          result[key] = nested;
        }
      } else if (beforeVal !== afterVal) {
        result[key] = `${beforeVal} => ${afterVal}`;
      }
    }

    return result;
  }

  if (before !== after) {
    return `${before} => ${after}`;
  }

  return {};
}

console.log(JSON.stringify(getDeepDiff(before_data, after_data), null, 2));
