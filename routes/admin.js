/*
 * @Author: Chris
 * @Date: 2021-01-04 19:52:11
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-04 20:34:29
 * @Descripttion: **
 */
const router = require('koa-router')();
// router.get('/', (ctx) => {
//   ctx.body = '管理后台'
// })
const user = require('../routes/admin/user')
router.use(user)

module.exports = router.routes()