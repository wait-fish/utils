# utils

#### 介绍

<<<<<<< HEAD
=======
1. **TimeOperation类：**操作时间的工具类，持续更新。
2. **StorageOperate对象**：操作session,local,可过期local。

#### 方法

##### 	1.**TimeOperation**类方法

​	type = ['yyyy-MM-dd','yyyy-MM-dd hh:mm:ss', 'y-M-d', 'y/M/d','y.M.d']

1. `new TimeOperation(date = new Date()) `  默认当前时间
2. `getOneHour() ` 返回一个小时的毫秒
3. `getOneDay()` 返回半个小时的毫秒
4. `get([yyyy,yy,MM,M,dd,d,hh,h,mm,m,s,s])` 返回对应的时间2022
5. `setValue(date)` [“2022-10-12 00:00:00”,Date对象]
6. `call(fnName, [value])`  例：call('setMonth', 2),call('getMonth')
7. `format([type])` 返回格式化时间
8. `getFirstTime([type])` 返回当天最早时间
9. `getLastTime`([type])  返回 当天最后时间
10. `getMonthFirstDay([type])` 返回当月第一天
11. `getMonthLastDay([type])` 返回当月最后一天
12. `getAfterMinutes(minutes = 0, [type])` 返回n分钟之后
13. `getAfterHours(hours = 0, [type])` 返回n小时之后
14. `timeDistance(endTime, type = 'd')` [“2022-10-12 00:00:00”,Date对象],type = ['d','h', 'm']

##### 2.StorageOperate对象方法

###### 2.1fishSessionStorage对象

1. `fishSessionStorage.get(key)`
2. `fishSessionStorage.set(key, value)`
3. `fishSessionStorage.remove(key)`

###### 2.2 fishLocalStorage对象

1. `fishLocalStorage.get(key)`
2. `fishLocalStorage.set(key, value)`
3. `fishLocalStorage.remove(key)`

###### 2.3 fishExpireLocalStorage对象

1. `fishExpireLocalStorage.get(key)`
2. `fishExpireLocalStorage.set(key, value, expire)` expire过期时间ms
3. `fishExpireLocalStorage.remove(key)`

###### 2.4 TimeDict时间字典

​	1.`TimeDict.ONEHOUR` 一小时

​	2.`TimeDict.ONEDAY` 一天

​	3.`TimeDict.ONEMINUTES` 一分钟

​	4.`TimeDict.ONESECOND` 一秒
>>>>>>> d508e22 (新增存储操作可过期存储)

