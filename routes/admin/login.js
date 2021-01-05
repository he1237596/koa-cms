/*
 * @Author: Chris
 * @Date: 2021-01-04 20:27:52
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-04 20:32:33
 * @Descripttion: **
 */
const router = require('koa-router')();

router.get('/',ctx =>{
  ctx.render('index',{title: '登录'})
})

module.exports = router.routes();