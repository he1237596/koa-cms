/*
 * @Author: Chris
 * @Date: 2021-01-04 20:27:45
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-04 20:40:53
 * @Descripttion: **
 */
const router = require('koa-router')();

router.get('/',ctx =>{
  ctx.render('admin/user/index',{title: '用户'})
})

module.exports = router.routes();