/*
 * @Author: Chris
 * @Date: 2021-01-04 20:27:52
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-06 10:49:00
 * @Descripttion: **
 */
const router = require('koa-router')();

router.get('/login',ctx =>{
  ctx.render('admin/login',{title: '登录'})
})

module.exports = router.routes();