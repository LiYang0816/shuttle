export default class CDate {
  // eslint-disable-next-line space-before-function-paren
  constructor(date) {
    date = date || new Date();
    this.date = new Date(date);
  }

  /**
   * 当前时间加n天
   * @method addDay
   * @param {int} 几天
   */
  addDay (n) {
    n = n || 0;
    this.date.setDate(this.date.getDate() + n);
    return this;
  }

  /**
   * 设置CDate对象的Date
   * @method setDate
   * @param {Date} 要设置的日期
   */
  setDate (n) {
    this.date.setDate(n);
    return this;
  }

  /**
   * 获得CDate对象的Date
   * @method getDate
   */
  getDate () {
    return this.date.getDate();
  }

  /**
   * 当前月份加n个月
   * @method addMonth
   * @param {int} 几个月
   */
  addMonth (n) {
    n = n || 0;
    this.date.setMonth(this.date.getMonth() + n);
    return this;
  }

  /**
   * 获得当前月份
   * @method getMonth
   */
  getMonth () {
    return this.date.getMonth() + 1; // 注意这里加1了
  }

  /**
   * 设置当前月份
   * @method setMonth
   * @param {int} 要设置的月份，当前月份9月 传9不是8
   */
  setMonth (n) {
    this.date.setMonth(n - 1); // 注意这里减1了
    return this;
  }

  /**
   * 当前时间加n个小时
   * @method addHours
   * @param {int} 几个小时
   */
  addHours (n) {
    n = n || 0;
    this.date.setHours(this.date.getHours() + n);
    return this;
  }

  /**
   * 获得当前小时
   * @method getHours
   */
  getHours () {
    return this.date.getHours();
  }

  /**
   * 当前时间基础上增加n分
   * @method addMinutes
   * @param {int} 分
   */
  addMinutes (n) {
    n = n || 0;
    this.date.setMinutes(this.date.getMinutes() + n);
    return this;
  }

  /**
   * 获得当前分钟
   * @method getMinutes
   */
  getMinutes () {
    return this.date.getMinutes();
  }

  /**
   * 设置分
   * @method setMinutes
   * @param {int} 分
   */
  setMinutes (n) {
    this.date.setMinutes(n);
    return this;
  }

  /**
   * 当前时间基础上增加n秒
   * @method addSeconds
   * @param {int} 秒
   */
  addSeconds (n) {
    n = n || 0;
    this.date.setSeconds(this.date.getSeconds() + n);
    return this;
  }

  /**
   * 获得当前秒
   * @method getSeconds
   */
  getSeconds () {
    return this.date.getSeconds();
  }

  /**
   * 设置秒
   * @method setSeconds
   * @param {int} 秒
   */
  setSeconds (n) {
    this.date.setSeconds(n);
    return this;
  }

  /**
   * 设置豪秒
   * @method setMilliseconds
   * @param {int} 豪秒
   */
  setMilliseconds (n) {
    this.date.setMilliseconds(n);
    return this;
  }

  /**
   * 当前时间加n年
   * @method addYear
   * @param {int} 几年
   */
  addYear (n) {
    n = n || 0;
    this.date.setYear(this.date.getFullYear() + n);
    return this;
  }
  getFullYear () {
    return this.date.getFullYear();
  }
  /**
   * 设置当前时间的小时，分，秒
   * @method setHours
   */
  setHours () {
    this.date.setHours.apply(this.date, arguments);
    return this;
  }

  /**
   * 获得原生Date对象
   * @method valueOf
   */
  valueOf () {
    return this.date;
  }

  /**
   * 获得毫秒数
   * @method getTime
   */
  getTime () {
    return this.date.valueOf();
  }

  /**
   * 格式化时间,格式化参数请参考php中date函数说明http://www.php.net/manual/zh/function.date.php
   * @method format
   * @param {CDate, string} 日期对象，格式
   */
  static format (date = new CDate(), format) {
    if (typeof format !== 'string') {
      format = '';
    }

    if (date instanceof this) {
      date = date.valueOf();
    } else {
      date = new CDate(date).date;
    }

    for (var key in this._MAPS) {
      format = this._MAPS[key].call(this, format, date, key);
    }
    return format;
  }

  /**
   * 将字符串转换为CDate对象
   * @method parse
   * @param {string} 要转换的字符串
   * @static
   */
  static parse (str) {
    if (typeof str === 'undefined') {
      return new Date();
    }
    if (typeof str === 'string') {
      str = str || '';
      var regtime = /^(\d{4})\\-?(\d{1,2})\\-?(\d{1,2})/i;
      if (str.match(regtime)) {
        str = str.replace(regtime, '$2/$3/$1');
      }
      var st = Date.parse(str);
      var t = new Date(st || new Date());
      return new CDate(t);
    } else if (typeof str === 'number') {
      return new Date(str);
    } else {
      return new Date();
    }
  }

  // diff hours and minutes
  static dhm (ms) {
    if (ms < 0) return;

    let cd = 24 * 60 * 60 * 1000;
    let ch = 60 * 60 * 1000;
    let d = Math.floor(ms / cd);
    let h = Math.floor((ms - d * cd) / ch);
    let m = Math.round((ms - d * cd - h * ch) / 60000);
    // let pad = (n) => n < 10 ? '0' + n : n

    // 向上取整
    if (m > 0) {
      h++;
      m = 0;
    }

    if (h === 24) {
      d++;
      h = 0;
    }

    return (d > 0 ? d + '天' : '') + (h > 0 ? h + '小时' : '');
  }

  // diff hours and minutes
  static d (ms) {
    if (ms < 0) return 0;

    let cd = 24 * 60 * 60 * 1000;
    let ch = 60 * 60 * 1000;
    let d = Math.floor(ms / cd);
    let h = Math.floor((ms - d * cd) / ch);
    let m = Math.round((ms - d * cd - h * ch) / 60000);

    // 向上取整
    if (m > 0) {
      h++;
      m = 0;
    }

    if (h > 0) {
      d++;
      h = 0;
    }

    return d;
  }

  // diff c2b hours and minutes
  static c2bdhm (ms, type = 1) {
    if (ms < 0) return;

    let cd = 24 * 60 * 60 * 1000;
    let ch = 60 * 60 * 1000;
    let d = Math.floor(ms / cd);
    let h = Math.floor((ms - d * cd) / ch);
    let m = Math.round((ms - d * cd - h * ch) / 60000);
    // let pad = (n) => n < 10 ? '0' + n : n

    // 向上取整
    if (m > 0) {
      h++;
      m = 0;
    }

    if (h > 0 && h <= 4 && type === 1) {
      // type: 1：不满4小时记为半天计算，大于4小时不满24h记为一天
      d = d + 0.5;
    } else if ((h > 4 && h <= 24) || (d === 0 && h <= 4 && type === 2)) {
      // type: 1,2：大于4小时不满24h按一天计算, 零天情况下，小于4小时按一天计算
      d = d + 1;
    } else if (h > 0 && h <= 4 && type === 2) {
      // type: 2：基本保障服务：大于4小时不满24h按一天计算,不满4小时记为零天
      // d = d;
    }

    return d;
  }

  // 支付剩余时间
  static paytime (ms) {
    if (ms < 0) return;

    let cd = 24 * 60 * 60 * 1000;
    let ch = 60 * 60 * 1000;
    let cm = 60 * 1000;
    let d = Math.floor(ms / cd);
    let h = Math.floor((ms - d * cd) / ch);
    let m = Math.floor((ms - d * cd - h * ch) / 60000);
    let s = Math.floor((ms - d * cd - h * ch - m * cm) / 1000);

    if (d > 0) {
      return (d < 10 ? '0' : '') + d + '天' + (h < 10 ? '0' : '') + h + '时';
    } else if (h > 0) {
      return (h < 10 ? '0' : '') + h + '时' + (m < 10 ? '0' : '') + m + '分';
    } else {
      return (m < 10 ? '0' : '') + m + '分' + (s < 10 ? '0' : '') + s + '秒';
    }
  }

  // 星期数据
  static _DAY1 = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  static _DAY2 = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ];
  static _MAPS = {
    // 有前导零的日期值
    d: function (str, date, key) {
      var d = date.getDate().toString();
      if (d.length < 2) {
        d = '0' + d;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 无前导零的日期值
    j: function (str, date, key) {
      return str.replace(new RegExp(key, 'mg'), date.getDate());
    },
    // 星期中的第几天 1-7
    N: function (str, date, key) {
      var d = date.getDay();
      if (d === 0) {
        d = 7;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    w: function (str, date, key) {
      var d = date.getDay();
      var title = this._DAY1[d];
      return str.replace(new RegExp(key, 'mg'), title);
    },
    W: function (str, date, key) {
      var d = date.getDay();
      var title = this._DAY2[d];
      return str.replace(new RegExp(key, 'mg'), title);
    },
    // 有前导零的月份
    m: function (str, date, key) {
      var d = (date.getMonth() + 1).toString();
      if (d.length < 2) {
        d = '0' + d;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 无前导零的月份
    n: function (str, date, key) {
      return str.replace(key, date.getMonth() + 1);
    },
    // 四位年份
    Y: function (str, date, key) {
      return str.replace(new RegExp(key, 'mg'), date.getFullYear());
    },
    // 两位年份
    y: function (str, date, key) {
      return str.replace(new RegExp(key, 'mg'), date.getYear());
    },
    // 无前导零的小时,12小时制
    g: function (str, date, key) {
      var d = date.getHours();
      if (d >= 12) {
        d = d - 12;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 无前导零的小时，24小时制
    G: function (str, date, key) {
      return str.replace(new RegExp(key, 'mg'), date.getHours());
    },
    // 有前导零的小时，12小时制
    h: function (str, date, key) {
      var d = date.getHours();
      if (d >= 12) {
        d = d - 12;
      }
      d += '';
      if (d.length < 2) {
        d = '0' + d;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 有前导零的小时，24小时制
    H: function (str, date, key) {
      var d = date.getHours().toString();
      if (d.length < 2) {
        d = '0' + d;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 有前导零的分钟
    i: function (str, date, key) {
      var d = date.getMinutes().toString();
      if (d.length < 2) {
        d = '0' + d;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 有前导零的秒
    s: function (str, date, key) {
      var d = date.getSeconds().toString();
      if (d.length < 2) {
        d = '0' + d;
      }
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 无前导零的分钟
    I: function (str, date, key) {
      var d = date.getMinutes().toString();
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 无前导零的秒
    S: function (str, date, key) {
      var d = date.getSeconds().toString();
      return str.replace(new RegExp(key, 'mg'), d);
    },
    // 转换为今天/明天/后天
    D: function (str, date, key) {
      var now = new Date();
      now.setHours(0, 0, 0, 0);
      date = new Date(date.valueOf());
      date.setHours(0, 0, 0, 0);
      var day = 60 * 60 * 24 * 1000;
      var tit = '';
      var diff = date - now;
      if (diff >= 0) {
        if (diff < day) {
          tit = '今天';
        } else if (diff < 2 * day) {
          tit = '明天';
        } else if (diff < 3 * day) {
          tit = '后天';
        }
      }
      return str.replace(new RegExp(key, 'mg'), tit);
    }
  };
}
