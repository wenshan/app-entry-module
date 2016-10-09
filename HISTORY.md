# HISTORY
# 0.4.6
1. 升级qwest版本

# 0.4.1~0.4.5
1. fetch并发请求回调处理bug修正
2. 增加`dopublish` script

# 0.4.0
1. fetch.js 增加并发请求配置`parallel`
2. fetch.js 增加判断无权限自定义配置`isAccessDeny`
3. fetch.js 增加当无权限时获取申请权限地址配置`getAuthUrl`

# 0.3.0
1. 首页菜单增加横向显示配置`horizonal`

# 0.2.3
1. 增加state helper的mixin

# 0.2.2
1. 修复升级antd之后面包屑的bug

# 0.2.1
1. 升级antd依赖为0.12.x版本

# 0.2.0
1. fetch增加adapter配置

## 0.1.1
1. app-cnt增加最小高度500px
2. logo padding-left 最小

## 0.1.0
1. fetch 方法增加alertError配置,默认为true,错误的时候弹出,false时不弹出
2. header 中用户信息改为从this.props.user中获取,之前是从全局变量window中获取的
3. header 用户icon样式调整
4. header icon点击事件添加,如果this.props.workUrl存在的话,点击会跳转至该url

## 0.0.8
1. suffix bugfix

## 0.0.7
1. 首页样式微调
2. suffix修正

## 0.0.6
logo 可点击至首页

## 0.0.5
1. 代码格式修正
2. Index配置项增加suffix后缀配置

## 0.0.4
首页样式调整

## 0.0.3
build fix

## 0.0.1
初始化版本
