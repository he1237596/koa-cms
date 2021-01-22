/*
 * @Author: Chris
 * @Date: 2021-01-04 19:52:11
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-09 15:54:53
 * @Descripttion: **
 */
const router = require('koa-router')();
// router.get('/', (ctx) => {
//   ctx.body = '管理后台'
// })
const user = require('../routes/admin/user');
const login = require('../routes/admin/login');
router.use(async (ctx, next) => {
  ctx.state.__ROOT_ = ctx.header.host;
  next();
})
router.get('/',ctx =>{
  ctx.render('admin/index')
})
router.use(user);
router.use(login);

module.exports = router.routes()