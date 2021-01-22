/*
 * @Author: Chris
 * @Date: 2021-01-04 19:52:11
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-05 19:57:33
 * @Descripttion: **
 */
const router = require('koa-router')();
const db = require('../module/db')
router.get('/', (ctx) => {
  ctx.body = '接口'
})

module.exports = router.routes()