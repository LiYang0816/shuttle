export default {
  // 返回数组的所有子集
  allSubSets (arr) {
    let res = [[]]
    for (let i = 0; i < arr.length; i++) {
      const tempRes = res.map(subset => {
        const one = subset.concat([]);
        one.push(arr[i]);
        return one;
      })
      res = res.concat(tempRes);
    }
    return res;
  }
};