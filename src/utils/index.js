


let utils = {
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
  },
  isArray (val) {//检测数组
    //通过Object.prototype.toString.call来精准检测类型 
    return Object.prototype.toString.call(val) === '[object Array]';
  },
  isObject (val) {//检测对象
    return typeof val === 'object' && val !== null;
  },
  deepCopy (obj2) {//递归深层copy
    /**
     * 把一个对象递归拷贝给另外一个对象
     * 源对象与拷贝后的对象没有引用关系
     */
    var obj = this.isArray(obj2) ? [] : {};
    for (var property in obj2) {
      // 如果当前拷贝的数据还是一个对象的话，那么继续调用
      // deepCopy 进行二次拷贝
      // 递归
      if (this.isObject(obj2[property])) {
        obj[property] = this.deepCopy(obj2[property]);
      } else {
        obj[property] = obj2[property];
      }
    }
    return obj;
  }
};

export default utils;