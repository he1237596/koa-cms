/*
 * @Author: Chris
 * @Date: 2021-01-04 19:52:11
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-04 20:14:53
 * @Descripttion: **
 */
const router = require('koa-router')();
router.get('/', (ctx) => {
  ctx.body = '客户端'
})

module.exports = router.routes()