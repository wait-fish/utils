// @author 等鱼
// TimeOperation 时间操作类
export default class TimeOperation {
  #date;
  // 一小时
  #ONEHOUR = 1000 * 60 * 60; // 毫秒
  // 一天
  #ONEDAY = 1000 * 60 * 60 * 24; // 毫秒
  // 一分钟
  #ONEMINUTES = 1000 * 60; // ms
  constructor (date) {
    this.#date = date ? new Date(date) : new Date();
  }
  // 获取一小时的ms
  getOneHour() {
    return this.#ONEHOUR;
  }
  // 获取一天的ms
  getOneDay() {
    return this.#ONEDAY;
  }
  // 获取单个值
  get(type = 'yyyy') {
    const typeObj = {
      'yyyy': `${this.#date.getFullYear()}`,
      'MM': `${this.#date.getMonth() + 1}`.padStart(2, '0'),
      'dd': `${this.#date.getDate()}`.padStart(2, '0'),
      'hh': `${this.#date.getHours()}`.padStart(2, '0'),
      'mm': `${this.#date.getMinutes()}`.padStart(2, '0'),
      'ss': `${this.#date.getSeconds()}`.padStart(2, '0'),
      'y': this.#date.getFullYear(),
      'M': this.#date.getMonth() + 1,
      'd': this.#date.getDate(),
      'h': this.#date.getHours(), 
      'm': this.#date.getMinutes(),
      's': this.#date.getSeconds()
    };
    return typeObj[type];
  }
  // 重新写入时间
  setValue(date) {
    this.#date = new Date(date);
  }
  // 调用自带函数
  call(fnName, value) {
    if (value) this.#date[`${fnName}`](value);
    else return this.#date[`${fnName}`]();
  }
  // 获取格式化的时间
  format(type = 'yyyy-MM-dd hh:mm:ss') {
    const types = type.split(/-+|:+| +|\.+|\//);
    types.forEach(item => {
      type = type.replace(item, this.get(item));
    })
    return type;
  }
  // 获取当天的 最早时间
  getFirstTime(type) {
    const date = new Date(this.#date);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return new TimeOperation(date).format(type);
  }
  // 获取当天的 最后时间
  getLastTime(type) {
    const date = new Date(this.#date);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return new TimeOperation(date).format(type);
  }
  // 获取当月份 第一天
  getMonthFirstDay(type) {
    const date = new Date(this.#date);
    date.setDate(1);
    return new TimeOperation(date).format(type);
  }
  // 获取当月份 最后一天
  getMonthLastDay(type) {
    const date = new Date(this.#date);
    date.setMonth(this.#date.getMonth() + 1);
    date.setDate(0);
    return new TimeOperation(date).format(type);
  }
  // 获取n分钟之后
  getAfterMinutes(minutes = 0, type) {
    const date = new Date(this.#date);
    date.setMinutes(date.getMinutes() + minutes);
    return new TimeOperation(date).format(type);
  }
  // 获取n小时之后
  getAfterHours(hours = 0, type) {
    const date = new Date(this.#date);
    date.setHours(date.getHours() + hours);
    return new TimeOperation(date).format(type);
  }
  // 两个时间的差
  timeDistance(endTime, type = 'd') {
    const ms = new Date(endTime).getTime() - new Date(this.#date).getTime()
    const timeObj = {
      'd': this.#ONEDAY,
      'h': this.#ONEHOUR,
      'm': this.#ONEMINUTES
    }
    return Math.floor(ms / timeObj[type])
  }
}