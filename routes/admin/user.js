/*
 * @Author: Chris
 * @Date: 2021-01-04 20:27:45
 * @LastEditors: Chris
 * @LastEditTime: 2021-01-09 15:55:34
 * @Descripttion: **
 */
const router = require('koa-router')();



router.get('/user/add',ctx =>{
  ctx.render('admin/user/add')
})
router.get('/user',ctx =>{
  ctx.render('admin/user/list')
})

module.exports = router.routes();